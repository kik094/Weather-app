window.addEventListener("load",()=>{
let showData = document.querySelector(".data-container")
let searchBtn = document.querySelector(".search-btn")
let searchBar = document.querySelector(".search-bar")

searchBtn.addEventListener("click",()=>{
    const cityInput = searchBar.value
    
    //Load data
    let API_KEY = "c78597ba5bf95cab3255468c17b56650"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {console.log(data)
        searchBar.value = ""
        //Display 
        showData.innerHTML = `
               
              <h1> ${data.main.temp}°</h1>
              <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"> </img>
               <h2>${data.name}, ${data.sys.country}</h2>
               <h3 class="weather">${data.weather[0].description}</h3>
              <div class="secondary-info">
              <div class="secondary-info-item">Humidity </br>
              ${data.main.humidity}%</div>
              <div class="secondary-info-item">Pressure </br>
              ${data.main.pressure}mb</div>
              <div class="secondary-info-item">Wind speed </br>
              ${data.wind.speed}KMH</div>

              
              </div>
            
        `

    })

     }) 
})