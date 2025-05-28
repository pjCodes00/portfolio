 
      const moonBtn= document.querySelector('.js-moon')
    

      moonBtn.addEventListener('click', () => {
        const body= document.body

        body.classList.toggle('white-mode')

        if(moonBtn.classList.contains('fa-moon')) {
          moonBtn.classList.replace('fa-moon', 'fa-sun')
        } else if (moonBtn.classList.contains('fa-sun')) {
          moonBtn.classList.replace('fa-sun', 'fa-moon')
        }
      })
  
