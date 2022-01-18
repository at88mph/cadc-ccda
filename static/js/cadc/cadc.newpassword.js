/**
 * New Password javascript
 * 
 *  - Add the hidden token field on load
 *  - Add handling for if the form submission request fails
 */
(function(document, wb) {
    document.addEventListener('DOMContentLoaded', function() {
        wb.doc.on('fail.wb-postback', function(_event, data) {
            const failureMessages = document.getElementsByClassName('failure-message')
            const failureMessagesLen = failureMessages ? failureMessages.length : 0
            for (let i = 0; i < failureMessagesLen; i++) {
              const messageP = document.createElement('p')
              const failureMessageContainer = failureMessages[i]
              messageP.innerHTML = data.response.responseText
              
              failureMessageContainer.appendChild(messageP)
            }
        })

        const form = document.getElementById('new_password_form')
        const urlSearchParams = new URLSearchParams(window.location.search)
        const tokenValue = urlSearchParams.get('token')

        const hiddenToken = document.createElement('input')
        hiddenToken.setAttribute('type', 'hidden')
        hiddenToken.setAttribute('name', 'token')
        hiddenToken.value = decodeURIComponent(tokenValue)

        form.appendChild(hiddenToken)
    })
})(document, wb)
