 
      const time= document.querySelector('.js-time')
      const pauseBtn= document.querySelector('.js-pause')
      const playBtn= document.querySelector('.js-play')
      const resetBtn= document.querySelector('.js-reset')

      let hours= 0;
      let minutes= 0;
      let seconds= 0;
      let interval= null;
      let isRunning= false;

      function updateTime(){
        seconds++
        if(seconds=== 60){
          seconds= 0;
          minutes++
        }

        if(minutes=== 60) {
          minutes= 0;
          hours++
        }

        const timeString= `
        ${hours.toString().padStart(2, '0')}:
        ${minutes.toString().padStart(2, '0')}:
        ${seconds.toString().padStart(2, '0')}
        `.trim()

        time.innerHTML= timeString
      }

      playBtn.addEventListener('click', () => {
        if (!isRunning) {
          isRunning= true;
         interval= setInterval(() => {
            updateTime()
          }, 1000)
        }
      })

      pauseBtn.addEventListener('click', () => {
        if(isRunning) {
          isRunning= false;
          clearInterval(interval)
        }
      })

      resetBtn.addEventListener('click', () => {
        isRunning= false;
        clearInterval(interval)
        hours= 0;
        minutes= 0;
        seconds= 0;
        time.innerHTML= '00:00:00'
      })

    