 
     

      async function loadQuote() {
        try{

        
       const response= await fetch('https://api.quotable.io/random')

       if(!response.ok) {
        throw new Error ('API responded with an error')
       }

        const quote= await response.json()
        console.log(quote)


        const html= ` <div class="title">Quote of the day</div>
        <div>
          <hr class="line-up">
        </div>
        <div class="quote">"${quote.content}"</div>
        <div class="author-line-div">
          <div class="line-div">
            <hr class="line">
          </div>
          <div class="author-div">
            <p>${quote.author}</p>
          </div>
        </div>
        <div class="button-div">
          <button class="new-quote-button js-quote-button quote-btn">New quote</button>
          <button class="js-tweet-button tweet-btn">Tweet</button>
        </div>`

       document.querySelector('.js-main-container').innerHTML= html

       const quoteButton= document.querySelector('.js-quote-button')
     quoteButton.addEventListener('click', () => {
      loadQuote();

     
     })

    
     const tweetButton= document.querySelector('.js-tweet-button')
     tweetButton.addEventListener('click', () => {
      const twitterText= encodeURIComponent(`"${quoteData.content}" - ${quoteData.author}`)
      const twitterUrl= `https://twitter.com/intent/tweet?text=${twitterText}`
      window.open(twitterUrl, '_blank')
     
     })

      } catch(error) {
        console.log(error)
         document.querySelector('.js-main-container').innerHTML= `<p style="padding: 10px; font-size: 17px;">Cannot display this page due to a CORS error or API issue.</p>`

        
      }

      }
      loadQuote();

     

  


