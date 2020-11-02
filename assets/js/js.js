const weatherButton = document.getElementById("weatherButton");
const txtCity = document.getElementById("txtCity");
const currentWeather = document.getElementById("currentWeather");

weatherButton.onclick = function(){
    const city = txtCity.value;
    console.log(city);
    const url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff";
    console.log(url);
    //fetch file for city
       fetch(url).then(response => response.json());
       //convert response to json     

}