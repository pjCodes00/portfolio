
     
      const successButton= document.querySelector('.js-success-button')
      const errButton= document.querySelector('.js-err-button')
      const invalidButton= document.querySelector('.js-invalid-button')
      const messageDiv= document.querySelector('.js-message-div')

     
      function showMessage(containerType, messageText, barType) {
        const container= document.createElement('div')
        container.classList.add(containerType)

      const message= document.createElement('div')
       message.classList.add('message')
       message.innerHTML= messageText

       const progressBar= document.createElement('div')
       progressBar.classList.add(barType)
       progressBar.style.width= '100%'

       messageDiv.appendChild(container)
      container.appendChild(message)
      container.appendChild(progressBar)

      setTimeout(() => {
        progressBar.style.width='0%'
      })

      

       setTimeout(() => {
       container.remove()
    
       }, 6000)
      }

     
     
      successButton.addEventListener('click', () => {
      showMessage('success-container', 'Successfully submitted', 'progress-bar1')

      })

      errButton.addEventListener('click', () => {
        showMessage('err-container', 'Please fix the error!', 'progress-bar2')

      })

      invalidButton.addEventListener('click', () => {
        showMessage('invalid-container', 'Invalid input, chcek again', 'progress-bar3')

      })

     
  
      
  