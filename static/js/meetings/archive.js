/**
 * Handles post page loading of the Meetings page to format links and Dates that the
 * general WET-4 API can't handle.
 * jenkinsd 2021.11.26
 */
 (function($, document) {
    // Set the link destinations for the Year buttons.
    $(document).on('wb-contentupdated', function(event) {
        const target = event.target

        // Isolate our concern here.
        if (target.id === 'archive_meetings_year_list') {
            const links = document.getElementsByClassName('year')
            const linkLength = links.length

            for (let i = 0; i < linkLength; i++) {
                const link = links[i]
                link.href = `../archive/#${link.dataset.year}`
            }
        }
    })

    // Load the specific year's data list.
    $(document).ready(function() {
        if (window.location.hash) {
            const triggerEventName = 'wb-init.wb-data-json'

            // Includes the hash symbol so substring it out.
            const year = window.location.hash.substring(1)

            const wbObj = {
                "url": `/meetings/meetings?year=${year}`,
                "mapping": ["/title", "/start", "/end", "/web1", "/web2", "/contact", "/location", "/address", "/phone", "/email", "/bibCode", "/keywords", "/meetingNumber"], 
                "queryall": [".title", ".start", ".end", ".web1", ".web2",".contact", ".location", ".address", ".phone", ".email", ".proceedings", ".keywords", ".meeting-number"] 
            }

            const list = document.getElementById('archive_meetings_list')
            list.dataset.wbJson = JSON.stringify(wbObj)

            const event = new Event(triggerEventName)
            list.dispatchEvent(event)
        }
    })
})(jQuery, document)