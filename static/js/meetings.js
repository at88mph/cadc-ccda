/**
 * Handles post page loading of the Meetings page to format links and Dates that the
 * general WET-4 API can't handle.
 * jenkinsd 2021.09.22
 */
 (function( $, document) {
    $(document).on( 'wb-contentupdated', function(event) {
        const $target = $(event.target)
        // console.log(`Target is ${JSON.stringify($target)}`)
        if ($target.is('ul.meetings')) {
            const monthNames = {
                'en': ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 
                       'December'],
                'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                       'juillette', 'août', 'septembre', 'octobre', 'novembre', 
                       'décembre']
            }

            const dayNames = {
                'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'fr': ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
            }

            const pageLang = $('html').attr('lang')

            // Set to default language if current one is not supported.
            const lang = dayNames.hasOwnProperty(pageLang) ? pageLang : 'en'

            $target.find('div.meeting-panel').each(function() {
                const $me = $(this)
                $me.find('.date').each(function() {
                    const $dateLabel = $(this)
                    const dateText = $dateLabel.text()
                    
                    if ($dateLabel.is('time')) {
                        $dateLabel.attr('datetime', dateText)
                    }
                    
                    if (dateText) {
                        const d = new Date(dateText)
            
                        // e.g. Friday, 25 November 1977
                        const parts = [dayNames[lang][d.getUTCDay()] + ',', d.getUTCDate(), monthNames[lang][d.getUTCMonth()], d.getUTCFullYear()]
                        $dateLabel.text(parts.join(' '))
                    }
                })
            
                $me.find('a.web').each(function() {
                    const $link = $(this)
                    $link.prop('href', $link.text())
                })

                const $editButton = $me.find('a.edit')
                const $editButtonLink = $editButton.prop('href')
                const $thisMeetingNumber = $me.find('.meeting-number').text()
                $editButton.prop('href', `${$editButtonLink}#${$thisMeetingNumber}`)
            })

            // Initialize list filtering for the lists
            $target.addClass('wb-filter')
            $target.attr('data-wb-filter', JSON.stringify({ "filterType": "or", "selector": ".meeting-panel" }))
        }
    })

    $(document).ready(function() {
        const $editForm = $('form#edit-meeting-form')
        if ($editForm && $editForm.length > 0) {
            if (window.location.hash) {
                const meetingID = window.location.hash.substring(1)
                const managed_json = {"url": `/meetings/meetings/${meetingID}`, "name": "meeting"}
                $editForm.attr('data-wb-jsonmanager', JSON.stringify(managed_json))
                const $header = $('h1#wb-cont')
                $header.text(`${$header.text()} (${meetingID})`)
                const $langToggle = $('section#wb-lng').find('a')
                $langToggle.prop('href', `${$langToggle.prop('href')}#${meetingID}`)
            } else {
                throw Error('No meeting ID supplied in request fragment.')
            }
        }
    })

    // Initialize the Archive table links
    $(document).on( "xhr.dt", ".entire-table", function( event, settings, json, xhr ) {
        const monthNames = {
            'en': ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 
                   'December'],
            'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                   'juillette', 'août', 'septembre', 'octobre', 'novembre', 
                   'décembre']
        }

        const dayNames = {
            'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'fr': ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
        }

        const pageLang = $('html').attr('lang')

        // Set to default language if current one is not supported.
        const lang = dayNames.hasOwnProperty(pageLang) ? pageLang : 'en'

        const data = json.data

        // update body
        const l = data.length
        for (index = 0; index < l; index++) {
            const meeting = data[index]
            meeting.edit = `<a href="update#${meeting.meetingNumber}" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span>&nbsp;Edit</a>`

            meeting.details = `<span class="row-details glyphicon glyphicon-chevron-right mrgn-tp-md text-info" data-row-id="${meeting.meetingNumber}"></span>`

            const startDateStr = meeting.start
            const endDateStr = meeting.end

            if (startDateStr && endDateStr) {
                const startDate = new Date(startDateStr)
                const endDate = new Date(endDateStr)
            
                // e.g. Friday, 25 November 1977
                const startParts = [dayNames[lang][startDate.getUTCDay()] + ',', startDate.getUTCDate(), monthNames[lang][startDate.getUTCMonth()], startDate.getUTCFullYear()]
                const endParts = [dayNames[lang][endDate.getUTCDay()] + ',', endDate.getUTCDate(), monthNames[lang][endDate.getUTCMonth()], endDate.getUTCFullYear()]
                
                meeting.dateRange = `<time datetime="${startDateStr}">${startParts.join(' ')}</time> - ${endParts.join(' ')}`
            }
        }

        json.data = data
    })

    $(document).on("wb-ready.wb-tables", ".wb-tables", function(event) {
        const formatExtraData = function(meeting) {
            let formattedData = '<div class="well">'
        
            if (meeting.web1 || meeting.web2) {
                if (meeting.web1) {
                    formattedData += `<a target="_blank" rel="external" class="web web1" href="${meeting.web1}">${meeting.web1}</a>`
                }

                if (meeting.web2) {
                    formattedData += `<a target="_blank" rel="external" class="web web2" href="${meeting.web2}">${meeting.web2}</a>`
                }
            }

            formattedData += '<dl class="mrgn-tp-lg">'
                             + '  <dt class="contact-label hide"></dt>'
                             + `  <dd class="contact"><span class="glyphicon glyphicon-user"></span>&nbsp;<span class="h4">${meeting.contact}</span>&nbsp;(<a href="mailto:${meeting.email}"><span class="glyphicon glyphicon-envelope"></span>&nbsp;${meeting.email}</a>)`

            if (meeting.phone && meeting.phone.trim() !== '') {
                formattedData += `&nbsp;<a href="tel:${meeting.phone}"><span class="glyphicon glyphicon-earphone"></span>&nbsp;${meeting.phone}</a>`
            }

            formattedData += '</dd>'

            let locationString = `<span class="text-info">${meeting.location}</span>`
            if (meeting.address && meeting.address.trim() !== '') {
                locationString += ' - ' + meeting.address
            }

            formattedData += '  <dt class="address-label hide"></dt>'
                             + `  <dd class="address"><span class="glyphicon glyphicon-map-marker"></span>&nbsp;${locationString}</dd>`
                             + '  <dt class="proceedings-label hide"></dt>'
                             + `  <dd class="proceedings">${meeting.bibCode}</dd>`

            if (meeting.keywords && meeting.keywords.trim() !== '') {
                formattedData += '  <dt class="keywords-label hide"></dt>'
                                 + `  <dd class="keywords"><pre><code>${meeting.keywords}</code></pre></dd>`
            }
            
            + '</dl>'
            + '</div>'

            return formattedData
        }       

        const table = $(this).DataTable()
        
        $('table.entire-table tbody').on('click', 'td.details-control', function () {
            const $td = $(this)
            const tr = $td.closest('tr');
            const row = table.row(tr);
    
            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
                $td.find('span.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right')
            } else {
                // Open this row
                row.child(formatExtraData(row.data())).show();
                tr.addClass('shown');
                $td.find('span.glyphicon').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down')
            }
        })
    })
})(jQuery, document); 
