 
      const circle1= document.querySelector('.circle1')
      const circle2= document.querySelector('.circle2')
      const circle3= document.querySelector('.circle3')
      const firstContainer= document.querySelector('.first-container')
      const sizeBtn= document.querySelectorAll('.size-btn')
      const colorBtn= document.querySelectorAll('.col-btn')

      function leftCtnr() {
      circle1.classList.add('all-circle')
       firstContainer.style.backgroundImage='url(images/image1.png)'

      circle1.addEventListener('click', () => {
        firstContainer.style.backgroundImage='url(images/image1.png)'
        circle1.classList.add('all-circle')
        circle2.classList.remove('all-circle')
        circle3.classList.remove('all-circle')
      })

      circle2.addEventListener('click', () => {
        firstContainer.style.backgroundImage='url(images/image2.png)'
        circle2.classList.add('all-circle')
        circle1.classList.remove('all-circle')
      })

      circle3.addEventListener('click', () => {
        firstContainer.style.backgroundImage='url(images/image3.png)'
        circle3.classList.add('all-circle')
        circle2.classList.remove('all-circle')
      })
    }
    leftCtnr()


    function sizeOption() {

    sizeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {

      sizeBtn.forEach((button) => {
        button.classList.remove('btn-color')
      })
      
       btn.classList.add('btn-color')
      })
    })
  }
  sizeOption()


   colorBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      colorBtn.forEach((button) => {
        button.classList.remove('col-border')
      })
      btn.classList.add('col-border')
    })
   })


    