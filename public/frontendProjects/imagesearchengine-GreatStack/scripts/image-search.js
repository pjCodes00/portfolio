   

      const search= document.querySelector('.js-search')
      const searchBtn= document.querySelector('.search-btn')
      const gridContainer= document.querySelector('.grid-container')
      const showMoreBtn= document.querySelector('.more-btn')
      const errMsg= document.querySelector('.err-msg')

      let page= 1


     async function loadImages(isNewSearch= false) {
      
      const searchWord= search.value

      if(!searchWord) {
        showMoreBtn.style.display='none'

        errMsg.style.display='block'
        errMsg.innerHTML= 'Please type something!'

        setTimeout(() => {
          errMsg.innerHTML=''
              errMsg.style.display='none'
        }, 2000)

        gridContainer.innerHTML='';

        return;
      }

      if(isNewSearch) {
        gridContainer.innerHTML='';
        page=1;

      }
     
      try{

     
        const response= await fetch (`https://api.unsplash.com/search/photos?page=${page}&query=${searchWord}&client_id=5qfMfpmUX4V4P1zDk51vPg6sFy5qZYFDywMo3M4Y5n0&per_page=12`)

          if(!response.ok) {
          errMsg.style.display='block'
          errMsg.innerHTML=`Error: ${response.statusText}`
          gridContainer.innerHTML=''
          showMoreBtn.style.display = 'none'

          return;
        }
    

        const data= await response.json()
        console.log(data)

        const results= data.results

      
        if(results && results.length > 0) {
         errMsg.style.display='none'
      
        results.forEach((result) => {
         const image= document.createElement('div')
          image.classList.add('image-size')
          image.innerHTML= `<a href="${result.links.html}" target="_blank"><img src="${result.urls.small}"></a>`

          gridContainer.appendChild(image)

        })
         showMoreBtn.style.display= 'block'
      } else {
       if(isNewSearch) {
        errMsg.style.display='block'
        showMoreBtn.style.display='none'

        setTimeout(() => {
          errMsg.innerHTML=''
          errMsg.style.display='none'
        }, 2000)
      }
        
      }

    } catch(error) {
      console.log(error)
      console.log('error in loading images')
    }
        
     }


      searchBtn.addEventListener('click', () => {
        loadImages(true)
        
      })

      showMoreBtn.addEventListener('click', () => {
        page++
        loadImages(false)
      })


      
  