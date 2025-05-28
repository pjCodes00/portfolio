
     const mainContainer= document.querySelector('.js-main-container')
     const submitButton= document.querySelector('.js-submit-button')
     const messageContainer= document.querySelector('.js-message-container')
     const okButton= document.querySelector('.js-ok-button')

     submitButton.addEventListener('click', () => {
        messageContainer.classList.add('active')
     })

     okButton.addEventListener('click', () => {
      messageContainer.classList.remove('active')
     })
     


    

  