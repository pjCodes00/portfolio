 
      const inputElement= document.querySelector('.js-input')
      const arrowBtn= document.querySelector('.js-button')
      const text= document.querySelector('.js-text-div')

      inputElement.addEventListener('input', () => {
        const password= inputElement.value

        inputElement.classList.remove('input1', 'input2', 'input3')
        arrowBtn.classList.remove('btn1', 'btn2', 'btn3')

        if(password.length === 0){
          text.innerHTML= '';
          return;
        }

        if(password.length < 5){
          text.innerHTML= '<p class="text3">Password is weak!</p>'
          inputElement.classList.add('input1')
          arrowBtn.classList.add('btn1')
          
        } else if(password.length >= 5 && password.length < 10 ) {
          text.innerHTML= '<p class="text2">Password has medium strength!</p>'
          inputElement.classList.add('input2')
          arrowBtn.classList.add('btn2')
          
        } else if (password.length >= 10) {
          text.innerHTML= '<p class="text1">Password is strong!</p>'
          inputElement.classList.add('input3')
          arrowBtn.classList.add('btn3')
          
        } 
      })
    