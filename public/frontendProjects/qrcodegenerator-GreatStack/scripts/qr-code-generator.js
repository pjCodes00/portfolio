 
         const errMsg= document.querySelector('.err-msg')
         const generateBtn= document.querySelector('.generate-button')

       let previousText= '';

      function generateQRCode() {
        const qrContainer= document.querySelector('.js-code')

        const textButton= document.querySelector('.js-input')
         const text=  textButton.value
        
        
        if(text.trim() === '') {
          errMsg.style.display= 'flex'
          errMsg.innerHTML='Please enter a text'

          setTimeout(() => {
            errMsg.style.display= 'none'
          }, 2000)
          return;
        } 

        if(text.trim() === previousText) {
           errMsg.style.display= 'flex'
          errMsg.innerHTML='QR code already generated, please type in a different text!'

          setTimeout(() => {
            errMsg.style.display= 'none'
          }, 2000)
         
          return;
        }

        previousText= text.trim()

          qrContainer.innerHTML= '';

          qrContainer.classList.add('code')

          new QRCode(qrContainer, {
            text: text,
            width: 100,
            height: 100,
            colorDark: '#000000',
            colorLight: '#ffffff'
          })
        
      }

generateBtn.addEventListener('click', () => {
    generateQRCode();
})

   
      

    
   