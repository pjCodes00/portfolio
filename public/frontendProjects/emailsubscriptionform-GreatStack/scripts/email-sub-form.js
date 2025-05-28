
  const scriptURL = 'https://script.google.com/macros/s/AKfycbznuzvUzEd5g2ngFnR47-nn27JcVle3N1eoyItp7_zCVbhLy5U-Bqkau-dcTK1NoKcH/exec'
  const form = document.forms['submit-to-google-sheet']

 
  const message= document.querySelector('.js-message')
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
           message.innerHTML='Thank You For Subscribing!'
           setInterval(() => {
          message.innerHTML= '';
        }, 2000)
        form.reset()

        })
        .catch(error => console.error('Error!', error.message))
    })
