      
      let days= 24
      let hours= 10
      let minutes= 48
      let seconds= 60

      function runTimer() {
        seconds--
        if(seconds < 0){
          seconds= 59
          minutes--
        }

        if(minutes < 0) {
          minutes= 59
          hours--
        }

        if(hours <  0){
          hours= 23
          days--
        }

        if(days=== 0){
          days=0
          hours=0
          minutes=0
          seconds=0
        } 

      const secondsString= seconds.toString().padStart(2, '0')
      const minutesString= minutes.toString().padStart(2, '0')
      const hoursString= hours.toString().padStart(2, '0')
      const daysString= days.toString()

      const html= `
       <div class="sub-time-div">
          <p class="time1">${daysString}</p>
          <p class="time2">Days</p>
        </div class=sub-time-div>
        <div class="sub-time-div">
          <p class="time1">${hoursString}</p>
          <p class="time2">Hours</p>
        </div>
        <div class="sub-time-div">
          <p class="time1">${minutesString}</p>
          <p class="time2">Minutes</p>
        </div>
        <div class="sub-time-div">
          <p class="time1">${secondsString}</p>
          <p class="time2">Seconds</p>
        </div>`

        document.querySelector('.js-main-time-div').innerHTML= html


      }

      

      setInterval(() => {
        runTimer();
      }, 1000)
     