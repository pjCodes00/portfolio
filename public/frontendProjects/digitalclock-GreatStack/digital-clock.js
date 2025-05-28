  
       import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

      

      function time() {
        const now= dayjs()
       console.log(now)

       const hour= now.format('HH')
       console.log(hour)

       const mins= now.format('mm')
       console.log(mins)

       const sec= now.format('ss')
       console.log(sec)

       const html= ` 
          <div class="time">
           <p class="num">${hour}</p>
           <p class="text">HOURS</p>
          </div>
          <div class="colon">:</div>
          <div class="time">
            <p class="num">${mins}</p>
            <p class="text">MINS</p>
          </div>
          <div class="colon">:</div>
          <div class="time">
            <p class="num">${sec}</p>
            <p class="text">SEC</p>
          </div>`

          document.querySelector('.rectangle').innerHTML= html
        }
        time()

        setInterval(() => {
          time()
        }, 1000)

    