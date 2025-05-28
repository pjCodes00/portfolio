 

    
      const playButton= document.querySelector('.js-play-button')
      const playIcon= '<i class="fa-solid fa-play"></i>'
      const pauseIcon= ' <i class="fa-solid fa-pause"></i>'
      const audio= document.querySelector('.js-audio')
      const progressBar= document.querySelector('.js-progress-bar')

      audio.addEventListener('timeupdate', () => {
        const progress= (audio.currentTime / audio.duration) * 100
        progressBar.value= progress || 0

        progressBar.style.background= `
        linear-gradient(to right, rgb(246, 101, 125) ${progress}%, rgb(252, 163, 177) ${progress}%)
        `
      })

      progressBar.addEventListener('input', (event) => {
        const seekTime= (event.target.value / 100) * audio.duration
        audio.currentTime= seekTime
      })


     

      playButton.addEventListener('click', () => {
    
      const icon= playButton.querySelector('i')

      if(icon.classList.contains('fa-play') && audio.paused ) {
        audio.play()
        playButton.innerHTML= pauseIcon
      } else if (icon.classList.contains('fa-pause')) {
        audio.pause()
        playButton.innerHTML= playIcon
      }
      
      })


    