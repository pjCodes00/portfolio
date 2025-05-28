  import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
  import duration from 'https://esm.sh/dayjs@1.11.10/plugin/duration';
import relativeTime from 'https://esm.sh/dayjs@1.11.10/plugin/relativeTime';

    const errMsg= document.querySelector('.err-msg')

    dayjs.extend(duration);
    dayjs.extend(relativeTime);

      function calculateAge() {
        const birthDateInput= document.querySelector('.js-date-input').value 

        if (!birthDateInput) {
          errMsg.style.display= 'flex'

          setTimeout(() => {
            errMsg.style.display= 'none'
          }, 2000)
          return;
        } 

        const today= dayjs()
        const birthdate= dayjs(birthDateInput)

        const years= today.diff(birthdate, "year")
        const months= today.diff(birthdate.add(years, "year"), "month")
        const days= today.diff(birthdate.add(years, "year").add(months, "month"), "day")

        const html= `<p class="age">You are ${years} years, ${months} months and ${days} days old</p>`

        document.querySelector('.js-date-container').innerHTML= html
      }

      const calculateButton= document.querySelector('.js-calculate-button')
      calculateButton.addEventListener('click', () => {
        calculateAge()
      })



       

    
    