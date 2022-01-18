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
  })
})(document, wb)
