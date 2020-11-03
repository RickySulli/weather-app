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
document.getElementById('day1Icon').src = "http://openweathermap.org/img/wn/"+data.list[9].weather[0].icon+".png";
document.getElementById('day1Day').innerHTML = data.list[9].dt_txt
document.getElementById('day1Temp').innerHTML = data.list[9].main.temp +"<span>&#176; F</span>"
document.getElementById('day1Wind').innerHTML = data.list[9].wind.deg + "<span>&#176;</span>" +  data.list[9].wind.speed + "MPH"
document.getElementById('day1UV').innerHTML = "UV: " + UVdata[1].value

document.getElementById('day2Icon').src = "http://openweathermap.org/img/wn/"+data.list[17].weather[0].icon+".png";
document.getElementById('day2Day').innerHTML = data.list[17].dt_txt
document.getElementById('day2Temp').innerHTML = data.list[17].main.temp + "<span>&#176; F</span>"
document.getElementById('day2Wind').innerHTML = data.list[17].wind.deg + "<span>&#176;</span>" +  data.list[17].wind.speed + "MPH"
document.getElementById('day2UV').innerHTML = "UV: " + UVdata[2].value

document.getElementById('day3Icon').src = "http://openweathermap.org/img/wn/"+data.list[25].weather[0].icon+".png";
document.getElementById('day3Day').innerHTML = data.list[25].dt_txt
document.getElementById('day3Temp').innerHTML = data.list[25].main.temp +"<span>&#176; F</span>"
document.getElementById('day3Wind').innerHTML = data.list[25].wind.deg + "<span>&#176;</span>" +  data.list[25].wind.speed + "MPH"
document.getElementById('day3UV').innerHTML = "UV: " + UVdata[3].value

document.getElementById('day4Icon').src = "http://openweathermap.org/img/wn/"+data.list[33].weather[0].icon+".png";
document.getElementById('day4Day').innerHTML = data.list[33].dt_txt
document.getElementById('day4Temp').innerHTML = data.list[33].main.temp +"<span>&#176; F</span>"
document.getElementById('day4Wind').innerHTML = data.list[33].wind.deg + "<span>&#176;</span>" +  data.list[33].wind.speed + "MPH"
document.getElementById('day4UV').innerHTML = "UV: " + UVdata[4].value

document.getElementById('day5Icon').src = "http://openweathermap.org/img/wn/"+data.list[40].weather[0].icon+".png";
document.getElementById('day5Day').innerHTML = data.list[40].dt_txt
document.getElementById('day5Temp').innerHTML = data.list[40].main.temp +"<span>&#176; F</span>"
document.getElementById('day5Wind').innerHTML = data.list[40].wind.deg + "<span>&#176;</span>" +  data.list[40].wind.speed + "MPH"
document.getElementById('day5UV').innerHTML = "UV: " + UVdata[5].value


}));

});
};
 
