/**
 * Service status JavaScript.
 * 
 *  - Add the hidden token field on load
 *  - Add handling for if the form submission request fails
 */
 (function(document, window, wb) {    
    const resourceCapabilitiesURL = 'https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/reg/resource-caps'

    function createRow(table, serviceURI, capabilitiesURL) {
        const tableBody = table.getElementsByTagName('tbody')[0]
        const parsedServiceURI = new URL(serviceURI)
        const standardID = '[standardID="ivo://ivoa.net/std/VOSI#availability"]'
        const serviceNameTextNode = document.createTextNode(parsedServiceURI.pathname)

        fetch(capabilitiesURL, { mode: 'cors' })
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    serviceNameCell.appendChild(serviceNameTextNode)
                }
            })
            .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
            .then(xml => {
                const capabilityElement = xml.querySelector(standardID)

                if (capabilityElement) {
                    // Insert a row at the end of table
                    const newRow = tableBody.insertRow()

                    // Insert a cell at the end of the row
                    const serviceNameCell = newRow.insertCell()
                    const availabilityFlagCell = newRow.insertCell()
                    const availabilityMessageCell = newRow.insertCell()
                    const lastCheckDateCell = newRow.insertCell()
                    lastCheckDateCell.appendChild(document.createTextNode(new Date().toUTCString()))

                    const accessURLElement = capabilityElement.querySelector('accessURL')

                    // Append a text node to the cell
                    const anchor = document.createElement('a')

                    if (accessURLElement) {
                        const accessURL = accessURLElement.innerHTML
                        anchor.href = accessURL
                        anchor.appendChild(serviceNameTextNode)
                        serviceNameCell.appendChild(anchor)
                        fetch(accessURL, { mode: 'cors' })
                            .then(response => { 
                                if (response.ok) {
                                    return response.text()
                                } else {
                                    serviceNameCell.appendChild(serviceNameTextNode)
                                }
                            })
                            .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
                            .then(xml => {
                                const isAvailableElement = xml.querySelector('available') || xml.querySelector('vosi\\:available')
                                if (isAvailableElement) {
                                    availabilityFlagCell.appendChild(document.createTextNode(isAvailableElement.innerHTML))
                                } else {
                                    availabilityFlagCell.appendChild('false')
                                }

                                const availabilityNoteElement = xml.querySelector('note') || xml.querySelector('vosi\\:note')
                                if (availabilityNoteElement) {
                                    availabilityMessageCell.appendChild(document.createTextNode(availabilityNoteElement.innerHTML))
                                }
                            })
                    } else {
                        serviceNameCell.appendChild(serviceNameTextNode)
                        // add error table cells
                    }
                } else {
                    console.log(`No capabilities found for ${serviceURI}`)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    function loadStatuses() {
        const table = document.getElementById('status')
        fetch(resourceCapabilitiesURL, { mode: 'cors' })
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                console.error(`Unable to get service documents from ${resourceCapabilitiesURL}`)
            }
        })
        .then(text => {
            text.split('\n')
                .filter(item => item.includes('cadc.nrc.ca') 
                                && !(item.includes('test') || item.includes('/reg') || item.includes('sc2') || item.includes('proto')))
                .forEach(entry => {
                                    const keyValue = entry.split('=')
                                    createRow(table, keyValue[0].trim(), keyValue[1].trim())
                                })
            
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => table.classList.remove('loading'))
    }

    document.addEventListener('DOMContentLoaded', () => {
        const updateIntervalMilliSeconds = 180 * 1000
        loadStatuses()
        setInterval(() => loadStatuses, updateIntervalMilliSeconds);
    })
})(document, window, wb)
