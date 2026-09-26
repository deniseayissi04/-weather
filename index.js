

async function FetchWeather (city) {

     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4f361e4d1f0660b1a553972de5a8989&units=metric&lang=fr`
     const res = await fetch(url)
     const data =await res.json()

     console.log(data);

    document.getElementById("city").innerHTML = data.name
    document.getElementById("feels").innerHTML = data.main.temp + "°c"
    document.getElementById("humous").innerHTML = data.main.humidity + "%"
    document.getElementById("windy").innerHTML = data.wind.speed + "km/h"


}

document.querySelector("form").addEventListener("submit" , (e) => {
  e.preventDefault()
    let ville = document.getElementById("city").value
     
    FetchWeather(ville)

})

FetchWeather("paris")





// const codeapi =("77847ccf17528b993060b03ddf181c5c") 