
    const input1= document.querySelector('.js-input1')
    const input2= document.querySelector('.js-input2')
    const input3= document.querySelector('.js-input3')
    const input4= document.querySelector('.js-input4')
    const submitBtn= document.querySelector('.js-submit')
    const iconMess1= document.querySelector('.js-icon-mess1')
    const iconMess2= document.querySelector('.js-icon-mess2')
    const iconMess3= document.querySelector('.js-icon-mess3')
    const iconMess4= document.querySelector('.js-icon-mess4')
    const errMess= document.querySelector('.js-error-mess')

    input1.addEventListener('input', () => {
      errMess.innerHTML= '';
      iconMess1.innerHTML='';

      const name1= input1.value.trim()
      const nameParts1= name1.split(" ")

       if(nameParts1.length < 2 || nameParts1.some(name => name.length === 0)){
        iconMess1.innerHTML= `<p class="message5">Write full name</p>`
        errMess.innerHTML= `Please fix error to submit!`
      } else {
         iconMess1.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }
    })

    input2.addEventListener('input', () => {
      errMess.innerHTML='';
      iconMess2.innerHTML='';

      const nameParts2= input2.value.trim()

      if(!/^\d{10}$/.test(nameParts2)){
        
        iconMess2.innerHTML= `<p class="message6">Phone no should be 10 digits</p>`
        errMess.innerHTML= `Please fix error to submit!`
      } else { 
         iconMess2.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }

    })

    input3.addEventListener('input', () => {
      errMess.innerHTML='';
      iconMess3.innerHTML='';

      const nameParts3= input3.value.trim()
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if(!emailRegex.test(nameParts3)){
        iconMess3.innerHTML= `<p class="message7">Please enter a valid email id</p>`
        errMess.innerHTML= `Please fix error to submit!`
      } else {
         iconMess3.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }
    
    })

    input4.addEventListener('input', () => {
      errMess.innerHTML='';
      iconMess4.innerHTML='';
      const nameParts4= input4.value.trim()

      if(nameParts4.length === 1){
        iconMess4.innerHTML= `<p class="message8">29 more characters are required</p>`
        errMess.innerHTML= `Please fix error to submit!`
      } else if(nameParts4.length === 10) {
        iconMess4.innerHTML= `<p class="message8">20 more characters required</p>`
      } else if (nameParts4.length === 20) {
         iconMess4.innerHTML= `<p class="message8">10 more characters required</p>`
      } else if (nameParts4.length > 30) {
         iconMess4.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }
    })

    submitBtn.addEventListener('click', () => {

      errMess.innerHTML= '';
      iconMess1.innerHTML='';
      iconMess2.innerHTML='';
      iconMess3.innerHTML='';
      iconMess4.innerHTML='';

      errMess.style.color= 'rgb(206, 7, 7)'

      setTimeout(() => {
        errMess.innerHTML=''
      }, 2000);

      const name1= input1.value.trim()
      const nameParts1= name1.split(" ")
      const nameParts2= input2.value.trim()
      const nameParts3= input3.value.trim()
      const nameParts4= input4.value.trim()

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
      let formIsValid= true;

      if(input1.value === ''){
        iconMess1.innerHTML= `<p class="message1">Name is required</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid=false;
      } else if(nameParts1.length < 2 || nameParts1.some(name => name.length === 0)){
        iconMess1.innerHTML= `<p class="message5">Write full name</p>`
        errMess.innerHTML= `Please fix error to submit!`
       
        formIsValid= false;
      } else {
         iconMess1.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
         
          
      }
      if(!formIsValid) return;

      if(input2.value === '') {
        iconMess2.innerHTML= `<p class="message2">Phone no is required</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid= false;
      } else if(!/^\d{10}$/.test(nameParts2)){
        iconMess2.innerHTML= `<p class="message6">Phone no should be 10 digits</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid=false;
      } else {
         iconMess2.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }
      if(!formIsValid) return;


      if(input3.value === '') {
        iconMess3.innerHTML= `<p class="message3">Invalid email</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid= false;
      } else if(!emailRegex.test(nameParts3)){
        iconMess3.innerHTML= `<p class="message7">Please enter a valid email id</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid= false;
      } else {
         iconMess3.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }
      if(!formIsValid) return;

      if(input4.value === ''){
        iconMess4.innerHTML= `<p class="message4">Message is required</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid= false;
      } else if(nameParts4.length < 30){
        iconMess4.innerHTML= `<p class="message8">30 characters are required</p>`
        errMess.innerHTML= `Please fix error to submit!`
        formIsValid= false;
      } else {
         iconMess4.innerHTML= `<i class="fa-solid fa-circle-check"></i>`
        
      }

      if(!formIsValid) return;


      if(formIsValid) {
        input1.value='';
        input2.value='';
        input3.value='';
        input4.value='';

        iconMess1.innerHTML='';
        iconMess2.innerHTML='';
        iconMess3.innerHTML='';
        iconMess4.innerHTML='';
      
        errMess.innerHTML='Form Submitted!'
        errMess.style.color= 'green'

        setTimeout(() => {
           errMess.innerHTML=''
        }, 2000);
      }
      


     
      
    })

    


    

    