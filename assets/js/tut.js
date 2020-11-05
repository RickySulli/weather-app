const city = searchBar.value;
const weatherButton = document.getElementById("weatherButton");
const currentDay = document.getElementById('currentDay');
const cityContainer = document.getElementById('city-container');
const fiveDay = document.getElementById('fiveDay');

const url =
  "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff&units=imperial";

weatherButton.onclick = function (event) {
  event.preventDefault();
  getWeather()
  getUV()
}

function getWeather() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderData(data));
    var lat = data[0].lat;
    var lon = data[0].lon;
    



  const UV = 
  "http://api.openweathermap.org/data/2.5/uvi/forecast?lat="+lat+"&lon="+lon+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff";

function getUV() {
  fetch(UV)
    .then(UVresponse => UVresponse.json())
    .then((UVdata) => renderUV(UVdata));
}


function renderUV(UVdata) {

    for(let i = 0; i < UVdata.length; i++) {
        console.log(UVdata);
    }
}

function renderData(data) {

    for(let i = 4; i < data.list.length; i+=8) {
        console.log(data.list[i]);
    
        // row
        // column 
        // element -- data you want displayed
    }
}}