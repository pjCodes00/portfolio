
    import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

    const today= dayjs()
    console.log(today)

    const day= today.format('dddd')
    console.log(day)

    const date= today.format('DD')
    console.log(date)

    const month= today.format('MMMM')
    console.log(month)

    const year= today.format('YYYY')
    console.log(year)

    const html= `
        <div class="container1">
          <p class="text1">${date}</p>
          <p class="text2">${day}</p>
        </div>
        <div class="container2">
          <p class="text3">${month}</p>
          <p class="text4">${year}</p>
        </div>`

        document.querySelector('.js-main-container').innerHTML=html
    