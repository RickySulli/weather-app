const weatherButton = document.getElementById("weatherButton");
const searchBar = document.getElementById("searchBar");
const currentWeather = document.getElementById("currentWeather");
const searchedCities = document.getElementById("searchedCities");
const currentCity = document.getElementById("currentCity");
const currentIcon = document.getElementById("currentIcon");
const currentUV = document.getElementById('currentUV');
const day1Day = document.getElementById('day1Day');
const windConditions = document.getElementById('windConditions');


weatherButton.onclick = function(event){
    event.preventDefault()
    

    const city = searchBar.value;
const url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff&units=imperial";
//fetch url
fetch(url)
.then(response => response.json())
.then((data) =>{
    console.log(data)
    currentCity.innerHTML = "Current Weather for: " + data.city.name
    currentWeather.innerHTML = data.list[0].main.temp + "<span>&#176; F</span>"
    document.getElementById('currentIcon').src = "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+".png";
const UV = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat="+data.city.coord.lat+"&lon="+data.city.coord.lon+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff";
    fetch(UV)
.then(UVresponse => UVresponse.json()
.then((UVdata) =>{
    console.log(UVdata)


    currentUV.innerHTML = "UV index: " + UVdata[0].value
windConditions.innerHTML = "Wind: " + data.list[0].wind.deg + "<span>&#176;</span>"+ "<br>" + data.list[0].wind.speed + "MPH"

if (UVdata.value > 7) {
    document.querySelector(".card-body").className = "bg-danger";
} else if (UVdata.value >= 2 && UVdata.value <= 7) {
    document.querySelector(".card-body").className = "bg-warning";
} else if (UVdata.value <= 2) {
    document.querySelector(".card-body").className = "bg-success";
}
}))

})
}
 
