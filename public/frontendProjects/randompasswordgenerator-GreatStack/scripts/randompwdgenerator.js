
      
      const msgCont= document.querySelector('.msg-cont')
      const passwordBtn= document.querySelector('.js-generate')
      passwordBtn.addEventListener('click', () => {
       generatePassword()
      })


      const size= 12
       const upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
       const lowerCase= 'abcdefghijklmnopqrstuvwxyz'
       const numbers= '0123456789'
       const characters= '!#$%&*^@#~+='
       const allChar= upperCase + lowerCase + numbers + characters
       const inputButton= document.querySelector('.js-input')
       

      function generatePassword() {
      let password= '';
       password+= upperCase[Math.floor(Math.random() * upperCase.length)]
       password+= lowerCase[Math.floor(Math.random() * lowerCase.length)]
       password+= numbers[Math.floor(Math.random() * numbers.length)]
       password+= characters[Math.floor(Math.random() * characters.length)]

       while(size > password.length) {
          password+= allChar[Math.floor(Math.random() * allChar.length)]
       }
       console.log(password)

       inputButton.value= password
       console.log(inputButton.value)
      }


      
      const copyButton= document.querySelector('.js-copy')
      copyButton.addEventListener('click', async () => {
        if(!inputButton.value) {
            msgCont.style.display= 'flex'
            msgCont.innerHTML= 'Cannot copy as no password has been generated!'
               msgCont.style.color= 'maroon'


            setTimeout(() => {
               msgCont.style.display= 'none'
            }, 2000)

            return;
        }
        inputButton.select()
        inputButton.setSelectionRange(0, 99999)
        try{
          await navigator.clipboard.writeText(inputButton.value)
            msgCont.style.display= 'flex'
             msgCont.innerHTML= 'Passsword copied!'
             msgCont.style.color= 'green'

            setTimeout(() => {
               msgCont.style.display= 'none'
            }, 2000)
        } catch(err) {
          console.error('failed to copy text!',err)
        }
      })





