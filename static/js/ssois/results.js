/**
 * Pull the GET form contents and submit them to the Perl backend.
 */
(function(document) {
    document.addEventListener('DOMContentLoaded', function() {
        const searchEndpoint = `/cadcbin/ssos/ssosclf.pl${window.location.search}`
        console.debug(`Searching from ${searchEndpoint}\n`)

        const event = new Event('wb-init.wb-data-ajax')
        const resultsContainer = document.getElementById('ssois_results')
        
        resultsContainer.setAttribute('data-ajax-replace', searchEndpoint)
        resultsContainer.dispatchEvent(event)
    })
})(document)