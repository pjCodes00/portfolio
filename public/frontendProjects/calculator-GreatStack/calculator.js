  
      let calculation= localStorage.getItem('calculation') || '';

      document.querySelector('.js-display').innerHTML= calculation

   function updateCalculation (key) {
        calculation += key
        //console.log(calculation)
        document.querySelector('.js-display').innerHTML= calculation

        localStorage.setItem('calculation', calculation)
      }

    

      
  