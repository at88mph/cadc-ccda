/**
 * Handles post page loading of the Meetings page to format links and Dates that the
 * general WET-4 API can't handle.
 * jenkinsd 2021.09.22
 */
 (function( $, document) {
    $(document).on( 'wb-contentupdated', function(event) {
        const $target = $(event.target)
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

            $target.find('div.meeting-well').each(function() {
                const $me = $(this)
                $me.find('.date').each(function() {
                    const $dateLabel = $(this)
                    const dateText = $dateLabel.text()
                    
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

            // Initialize list filtering
            $target.addClass('wb-filter')
            $target.attr('data-wb-filter', JSON.stringify({ "filterType": "or" }))
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
})(jQuery, document); 
