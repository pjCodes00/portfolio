
   
    const searchBtn= document.querySelector('.js-search')
    const sun= '<i class="fa-solid fa-sun fa-icon"></i>'
    const cloud= '<i class="fa-solid fa-cloud fa-icon"></i>'
    const rain= '<i class="fa-solid fa-cloud-showers-heavy fa-icon"></i>'
    const smog= '<i class="fa-solid fa-smog fa-icon"></i>'
    const snow= '<i class="fa-solid fa-snowflake fa-icon"></i>'
    const clear= '<i class="fa-solid fa-cloud-sun fa-icon"></i>'
    const mist= '<i class="fa-solid fa-water fa-icon"></i>'


    const getWeather= async() => {
      const cityName= document.querySelector('.js-input').value

      if(!cityName) {
        document.querySelector('.js-weather-container').innerHTML= `<p class="err-msg">Please type in a city name!</p>`

        setTimeout(() => {
          document.querySelector('.js-weather-container').innerHTML=''
        }, 2000)
        return;
      }

      try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4c240938e98ed8722af8bebab97abd4d&units=metric`)

        if(response.status === 404) {
          document.querySelector('.js-weather-container').innerHTML= `<p class="err-msg">City not found!</p>`

          setTimeout(() => {
          document.querySelector('.js-weather-container').innerHTML=''
        }, 2000)
          return;
        }

        if(!response.ok) {
          throw new Error('city not found')
          
        }

    

        const data= await response.json()
        console.log(data)

        const dataWeather= data.weather[0].main

        let weatherIcon= '';
        if(dataWeather=== 'Clouds') {
          weatherIcon= cloud
        } else if(dataWeather=== 'Rain') {
          weatherIcon= rain
        } else if(dataWeather=== 'Smoke') {
          weatherIcon= smog
        } else if(dataWeather===  'Snow') {
          weatherIcon= snow
        } else if(dataWeather=== 'Clear'){
          weatherIcon= clear
        } else if(dataWeather=== 'Mist'){ 
          weatherIcon= mist
        } else{
          weatherIcon= sun
        }

        const html= `  
        <div class="weather-display-div">
          <div>${weatherIcon}</div>
          <p class="text">${data.main.temp}&deg;C</p>
          <p class="text">${data.name}</p>
        </div>
        <div class="weather-stats-main-div">
          <div class="weather-stats-div1">
            <div class="weather-stats-div2">
              <i class="fa-solid fa-water"></i>
            </div>
            <div>
              <p class="text">${data.main.humidity}%</p>
              <p>Humidity</p>
            </div> 
          </div>
          <div class="weather-stats-div1">
            <div class="weather-stats-div2">
              <i class="fa-solid fa-wind"></i>
            </div>
            <div>
                <p class="text">${data.wind.speed}km/h</p>
                <p>Wind speed</p>
            </div>
          </div>
        </div>`


        document.querySelector('.js-weather-container').innerHTML= html
      } catch(error) {
        console.log(error.message)
     
      }
     

      
    }

    
  
    searchBtn.addEventListener('click', () => {
      getWeather();

    })

   