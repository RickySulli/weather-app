const city = searchBar.value;
const weatherButton = document.getElementById("weatherButton");
const currentDay = document.getElementById('currentDay');
const cityContainer = document.getElementById('cityContainer');
const fiveDay = document.getElementById('fiveDay');
var historyItemEl = document.getElementsByTagName('a');

const url =
  "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff&units=imperial";
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
weatherButton.onclick = function (event) {
  
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
const renderSearchHistory = (arr) => {
  cityContainer.innerHTML = "";
  console.log(searchHistory);
  for (let i=0; i<searchHistory.length; i++) {
      let historyItemEl = document.createElement("a");
      historyItemEl.classList = "history-list";
      historyItemEl.textContent = searchHistory[i]
      let cityName = searchHistory[i]
      // When history Item is clicked, jump into its data
      historyItemEl.addEventListener("click",function() {
          // getCurrentWeather(historyItemEl.value);
          getCurrentWeather(cityName);
          console.log(cityName);
      })
      cityContainer.appendChild(historyItemEl)
  }

};