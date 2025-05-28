  
      const secondCircle= document.querySelector('.second-circle')
      const firstCircle= document.querySelector('.first-circle')

       let num= 0

      function percentage() {
        if(num < 65) {
          num++
           secondCircle.innerHTML= `${num}%`
        } else {
          clearInterval(interval)
        }
    
      }


      

      const interval= setInterval(() => {
        percentage()
      }, 30)
    