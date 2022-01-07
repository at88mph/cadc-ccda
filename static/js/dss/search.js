(function(document) {
    document.addEventListener('DOMContentLoaded', function() {
        const results = document.getElementById('query_results')
        const form = document.getElementById('query_form')
        const resultsEndpoint = document.getElementById('results_endpoint').textContent

        const getResults = function() {
            fetch(form.getAttribute('action'), {
                method: form.getAttribute('method'),
                body: new FormData(form)
            })
            .then(function(response) {
                const redirect = new URL(response.url)
                window.location.href = `${resultsEndpoint}${redirect.search}`
            })
            .catch(function(err) {
                throw new Error(err)
            })
        }

        const submitListener = function(event) {
            event.preventDefault()
            getResults()
        }

        form.removeEventListener('submit', submitListener)
        form.addEventListener('submit', submitListener)
    })
})(document)
