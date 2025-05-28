

       const quizList= [{
      question: '1.which is the largest animal in the world?',
      options: {
        first: 'Shark',
        second: 'Blue whale',
        third: 'Elephant',
        fourth: 'Giraffe'
      },
      correctOption: 'Blue whale'
     }, {
      question: '2.what is the smallest country in the world?',
      options: {
        first: 'Vatican city',
        second: 'Bhutan',
        third: 'Nepal',
        fourth: 'Shri lanka'
      },
      correctOption: 'Vatican city'
     }, {
      question: '3.what is the smallest country in the world?',
      options: {
        first: 'Vatican city',
        second: 'Bhutan',
        third: 'Nepal',
        fourth: 'Shri lanka'
      },
      correctOption: 'Vatican city'
     }, {
      question: '4.what is the smallest country in the world?',
      options: {
        first: 'Vatican city',
        second: 'Bhutan',
        third: 'Nepal',
        fourth: 'Shri lanka'
      },
      correctOption: 'Vatican city'
     }]

     const score={
      wins: 0,
      total:0
 
     }

     let currentIndex= 0;

     function loadQuestion() {
     
       const quiz= quizList[currentIndex]
    

     const html= ` <div class="title">Simple Quiz</div>
         <hr class="line">
        <div class="question">${quiz.question}</div>
        <div class="options-container">
          <div class="option">
            <button class="option-button  js-shark js-quiz" >${quiz.options.first}</button>
          </div>
          <div class="option">
            <button class="option-button option2 js-blue-whale js-quiz" >${quiz.options.second}</button>
          </div>
          <div class="option ">
            <button class="option-button option3 js-elephant js-quiz" >${quiz.options.third}</button>
          </div>
          <div class="option">
            <button class="option-button option4 js-giraffe js-quiz">${quiz.options.fourth}</button>
          </div>
         
        </div>
        <div class="next-button">
          <button class="js-next next play-next">Next</button>
        </div>`
       
  

     document.querySelector('.js-main-container')
       .innerHTML= html

      const quizButton= document.querySelectorAll('.js-quiz')
         quizButton.forEach((button) => {
            button.addEventListener('click', () => {
              const quizOption= button.innerHTML;
            const nextButton= document.querySelector('.js-next')

            quizButton.forEach((btn) => {
              if(btn.innerHTML === quiz.correctOption) {
                btn.style.backgroundColor= 'rgb(156, 238, 156)'
             
                 score.total++
              }

              if(btn === button) {

              if (quizOption.toLowerCase() !== quiz.correctOption.toLowerCase()) {
                  button.style.backgroundColor= 'rgb(240, 122, 122)'
            
                  
                 }

              if(quizOption === quiz.correctOption){
                score.wins++
                
              }
                }
          btn.disabled=true;
          btn.classList.add('no-hover')
          btn.style.color="black"
              })
            nextButton.classList.remove('next')
        })
       })

    
       const nextButton= document.querySelector('.js-next')
    nextButton.addEventListener('click', () => {
      currentIndex++
      if(currentIndex < quizList.length){
        loadQuestion()
      } else {
        document.querySelector('.js-main-container')
         .innerHTML= `<div 
         <div class="title">Simple Quiz</div>
         <hr class="line">
         <div class="question">You scored ${score.wins} out of ${score.total}</div>
         <div  class="play-again">
          <button class="play-next js-play">Play again</button>
          </div>
          </div>`

          const playAgain= document.querySelector('.js-play')
       playAgain.addEventListener('click', () => {
      currentIndex=0
      score.wins=0
      score.total=0 
      loadQuestion()
    })

      }
      
    })

    
    }

    loadQuestion()

   




  
    
  
    





    