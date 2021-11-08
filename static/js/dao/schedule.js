(function($, document) {
    $(document).on('wb-ready.wb', function() {
        const pageLang = $('html').attr('lang')

        const formatDate = function(date) {
            const monthNames = {
                'en': ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November',
                    'December'
                ],
                'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                    'juillette', 'août', 'septembre', 'octobre', 'novembre',
                    'décembre'
                ]
            }

            const dayNames = {
                'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'fr': ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
            }

            // Set to default language if current one is not supported.
            const lang = dayNames.hasOwnProperty(pageLang) ? pageLang : 'en'

            // e.g. Fri 25-Nov-1977
            return `${dayNames[lang][date.getDay()].substring(0, 3)} ${date.getDate()}-${monthNames[lang][date.getMonth()].substring(0, 3)}-${date.getFullYear()}`
        }

        const isThisWeek = function(date) {
            const now = new Date()

            // get first date of week
            const firstDayOfWeek = new Date();
            firstDayOfWeek.setDate(now.getDate() - 1)
            firstDayOfWeek.setHours(0)
            firstDayOfWeek.setMinutes(0)
            firstDayOfWeek.setSeconds(0)
            firstDayOfWeek.setMilliseconds(0)

            // get last date of week
            const lastDayOfWeek = new Date();
            lastDayOfWeek.setDate(now.getDate() + 7);
            lastDayOfWeek.setHours(0)
            lastDayOfWeek.setMinutes(0)
            lastDayOfWeek.setSeconds(0)
            lastDayOfWeek.setMilliseconds(0)

            // if date is equal or within the first and last dates of the week
            return date >= firstDayOfWeek && date <= lastDayOfWeek;
        }

        const parse = function(line) {
            const splitLineArray = line.split(/\s+/)
            let index = 0
            const program = splitLineArray[index++]
            const pi = splitLineArray[index++]
            const observer = splitLineArray[index++]
            const dayString = splitLineArray[index++]
            const day = dayString.padStart(2, '0')
            const monthString = splitLineArray[index++]
            const month = monthString.padStart(2, '0')
            const year = splitLineArray[index++]
            const instrument = splitLineArray[index++]
            const detector = splitLineArray[index]
            const dateString = `${year}-${month}-${day}`

            // Avoid passing elements to the Date constructor as it behaves weirdly
            // in different browsers.
            const date = new Date()
            date.setFullYear(parseInt(year))
            date.setMonth(parseInt(monthString) - 1) // 0 indexed
            date.setDate(parseInt(dayString))
            date.setHours(0)
            date.setMinutes(0)
            date.setSeconds(0)
            date.setMilliseconds(0)

            return {
                "program": program,
                "pi": pi,
                "observer": observer,
                "dateString": dateString,
                "date": date,
                "instrument": instrument,
                "detector": detector
            }
        }

        const isToday = function(date) {
            const now = new Date()
            return now.getDate() === date.getDate() && now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()
        }

        const matchLastNames = function(piArray, piAbbr) {
            const len = piArray.length
            const piAbbrArr = piAbbr.split('/')
            const returnArr = []
            for (let i = 0; i < len; i++) {
                const piObj = piArray[i]
                for (let j = 0; j < piAbbrArr.length; j++) {
                    const abbr = piAbbrArr[j]
                    if (piObj.abbr === abbr) {
                        returnArr.push(piObj.lastName)
                    }
                }
            }

            return returnArr.length > 0 ? returnArr : piAbbrArr
        }

        const reduceToThisWeeksData = function(data) {
            const initFilterArray = data.split('\n').filter(function(element, _index, _array) {
                return element && element.trim() !== '' && element.trim().indexOf('#') < 0
            })

            const arr = initFilterArray.map(function(element, _index, _array) {
                return parse(element)
            }).filter(element => isThisWeek(element.date))

            arr.sort((firstEl, secondEl) => firstEl.date > secondEl.date)

            return arr
        }

        const rowPortion = function(rowRef, piArray, rowData) {
            const piCellTextAddendum = ((rowData.pi !== rowData.observer) ? `<br />(${rowData.observer})` : '')
            const piCell = rowRef.insertCell()
            piCell.innerHTML = matchLastNames(piArray, rowData.pi).join(' / ') + piCellTextAddendum

            const programCell = rowRef.insertCell()
            const programCellText = document.createTextNode(rowData.program)
            programCell.appendChild(programCellText)

            const instrumentDetectorCell = rowRef.insertCell()
            instrumentDetectorCell.innerHTML = `${rowData.instrument}<br />${rowData.detector}`
        }

        const populateTable = function(piArray) {
            // Space delimited schedule entries.
            const url_1_2 = '/files/vault/DAO/Schedules/48_schedule.dat'
            const url_1_8 = '/files/vault/DAO/Schedules/72_schedule.dat'
            const tbodyRef = document.getElementById('schedule_table').getElementsByTagName('tbody')[0]

            $.ajax(url_1_2).done(function(data1_2) {
                const arr1_2 = reduceToThisWeeksData(data1_2)
                $.ajax(url_1_8).done(function(data1_8) {
                    const arr1_8 = reduceToThisWeeksData(data1_8)

                    const len = arr1_2.length
                    for (let i = 0; i < len; i++) {
                        const rowData1_2 = arr1_2[i]
                        const rowData1_8 = arr1_8[i]
                        const row = tbodyRef.insertRow()

                        if (isToday(rowData1_2.date)) {
                            row.classList.add('info')
                        }

                        const dateCell = row.insertCell()
                        dateCell.innerHTML = `<time datetime="${rowData1_2.dateString}">${formatDate(rowData1_2.date)}</time>`
                        rowPortion(row, piArray, rowData1_2)
                        rowPortion(row, piArray, rowData1_8)
                    }
                })
            })
        }

        // TAB delimited file of PI names.
        const url_pis = '/files/vault/DAO/Schedules/daoPIs.txt'
        $.ajax(url_pis).done(function(data) {
            const initFilterArray = data.split('\n').filter(function(element, _index, _array) {
                return element && element.trim() !== '' && element.trim().indexOf('#') < 0
            })

            const piArray = initFilterArray.map(function(element, _index, _array) {
                const row = element.split('\t')
                return {
                    'abbr': row[0],
                    'name': row[1],
                    'lastName': row[1].split(',')[0].trim(),
                    'inst': row[2]
                }
            })

            populateTable(piArray)
        })

        // HTML Table
        const url_complete = `/files/vault/DAO/Schedules/schedules_${pageLang}.html`
        $.ajax(url_complete).done(function(htmlTableData) {
            const htmlDataContainer = document.createElement('div')
            htmlDataContainer.innerHTML = htmlTableData

            const htmlData = htmlDataContainer.getElementsByTagName('table')[0]
            const targetTableRef = document.getElementById('complete_schedule_table')

            // This is a little fickle as it could change, but finding an h4 tag was
            // not possible.
            const caption = htmlDataContainer.getElementsByTagName('h4')[0]
            const targetCaption = targetTableRef.createCaption()
            targetCaption.innerHTML = caption.innerHTML

            // The table element is the top element, so find the 'tbody'
            const completeTableData = htmlData.getElementsByTagName('tbody')[0]
            const targetTableTBodyRef = targetTableRef.createTBody()

            const headerRowRef = completeTableData.firstChild
            const thead = targetTableRef.createTHead()
            const theadRow = thead.insertRow()
            const headerRowHeaderRefs = headerRowRef.getElementsByTagName('th')
            const headerRowHeaderRefLength = headerRowHeaderRefs.length

            for (let i = 0; i < headerRowHeaderRefLength; i++) {
                const thRef = document.createElement('th')
                thRef.innerHTML = headerRowHeaderRefs[i].innerHTML
                theadRow.appendChild(thRef)
            }

            // Skip over the header row
            const completeTableDataRows = Array.prototype.slice.call(completeTableData.getElementsByTagName('tr'), 1)
            const completeTableDataRowsLength = completeTableDataRows.length
            for (let i = 0; i < completeTableDataRowsLength; i++) {
                const nextRow = completeTableDataRows[i]
                const newRow = targetTableTBodyRef.insertRow()
                const nextRowCells = nextRow.getElementsByTagName('td')
                const nextRowCellsLength = nextRowCells.length

                for (let c = 0; c < nextRowCellsLength; c++) {
                    const currCell = nextRowCells[c]
                    const newCell = newRow.insertCell()
                    newCell.innerHTML = currCell.innerHTML
                    newCell.rowSpan = currCell.rowSpan
                }
            }
        })
    })
})(jQuery, document)