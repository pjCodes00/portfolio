 
      const leftBtn= document.querySelector('.js-left-button')
      const rightBtn= document.querySelector('.js-right-button')
      const imageBox= document.querySelector('.js-image-container')

      const imageWidth= 170

      rightBtn.addEventListener('click', () => {
        imageBox.scrollBy({ left: imageWidth * 3, behavior: 'smooth' });

      })

      leftBtn.addEventListener('click', () => {
        imageBox.scrollBy({ left: -imageWidth * 3, behavior: 'smooth' });

      }) 
    