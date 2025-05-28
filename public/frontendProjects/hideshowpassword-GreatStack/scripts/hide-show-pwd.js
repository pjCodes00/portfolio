   
      const passwordBtn= document.querySelector('.js-password-btn')
      const eyeIcon= '<i class="fa-solid fa-eye"></i>'
      const eyeslashIcon= '<i class="fa-solid fa-eye-slash"></i>'
      const passwordInput= document.querySelector('.js-password-input')

      passwordBtn.addEventListener('click', () => {

        const icon= passwordBtn.querySelector('i')

        if(icon.classList.contains('fa-eye-slash')) {
          passwordInput.type= 'text'
          icon.classList.replace('fa-eye-slash', 'fa-eye')
        } else if (icon.classList.contains('fa-eye')) {
          passwordInput.type= 'password'
          icon.classList.replace('fa-eye', 'fa-eye-slash')
        }

        
      })

  