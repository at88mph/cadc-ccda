/**
 * Pull the GET form contents and submit them to the Perl backend.
 */
 (function(document) {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('dao_app').addEventListener('submit', (e) => {
            e.preventDefault()
            const form = e.target
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                mode: 'cors'
            }).then((response) => {
                if (!response.ok) {
                    return Promise.reject(response)
                } else {
                    return response.text()
                }
            }).then((responseText) => {
                form.classList.add('wb-inv')
                const resultsContainer = document.getElementById('dao_app_results')
                resultsContainer.innerHTML = responseText;
            }).catch((error) => {
                console.warn(error);
            });
        })
    })
})(document)