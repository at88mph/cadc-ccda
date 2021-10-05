/**
 * Handles post page loading of the Meetings page to format links and Dates that the
 * general WET-4 API can't handle.
 * jenkinsd 2021.09.22
 */
 $('ul#meetings_list').on( 'wb-contentupdated', function(event) {
    const $meetingsList = $(this)
    const monthNames = {
        'en': ['January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 
               'December'],
        'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
               'juillette', 'août', 'septembre', 'octobre', 'novembre', 
               'décembre'],
    }

    const dayNames = {
        'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'fr': ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    }

    const pageLang = $('html').attr('lang')

    // Set to default language if current one is not supported.
    const lang = dayNames.hasOwnProperty(pageLang) ? pageLang : 'en'

    $meetingsList.find('.date').each(function() {
        const $dateLabel = $(this)
        const dateText = $dateLabel.text()
        
        if (dateText) {
            const d = new Date(dateText)

            // e.g. Friday, 25 November 1977
            const parts = [dayNames[lang][d.getDay()] + ',', d.getDate(), monthNames[lang][d.getMonth()], d.getFullYear()]
            $dateLabel.text(parts.join(' '))
        }
    })

    $meetingsList.find('.web').each(function() {
        const $link = $(this)
        const linkText = $link.text()

        if (linkText) {
            $link.attr('href', linkText)
        }
    })
})
