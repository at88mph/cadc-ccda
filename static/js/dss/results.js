/**
 * Set the language link's proc ID to remain with the same result set.
 */
(function(document) {
    document.addEventListener('DOMContentLoaded', function() {
        const currURL = new URL(window.location.href)
        const langContainer = document.getElementById('wb-lng')
        const anchor = langContainer.querySelector('a')
        anchor.setAttribute('href', `${anchor.getAttribute('href')}${currURL.search}`)

        const event = new Event('wb-init.wb-data-ajax')
        const resultsContainer = document.getElementById('dss_results')
        const resultsEndpoint = `${resultsContainer.dataset.resultsEndpoint}${currURL.search}`
        
        resultsContainer.setAttribute('data-ajax-replace', resultsEndpoint)
        resultsContainer.dispatchEvent(event)
    })
})(document)
