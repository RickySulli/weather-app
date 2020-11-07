const weatherButton = document.getElementById("weatherButton");
const searchBar = document.getElementById("searchBar");
const currentCard = document.getElementById("currentCard");
const cityContainer = document.getElementById("cityContainer");
const fiveDay = document.getElementById("fiveDay");


weatherButton.onclick = function(event){
    event.preventDefault()
    const city = searchBar.value;
              
        const url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff&units=imperial";
       //create dynamic title card for weather
           
       var currentCard = document.querySelector('#currentCard')
            var intro = document.createElement('div')
                intro.className = "h2";
                intro.textContent = "5 day forecast for: "
                    currentCard.appendChild(intro)
            var cityName = document.createElement ('div')
                cityName.className = "h1";
                cityName.textContent = (city)
                    currentCard.appendChild(cityName) 
 //fetch url
             fetch(url)   
                .then(response => response.json())
                .then((data) =>{
                    for(let i = 4; i < data.list.length; i+=8) {
                //five day forecast 
                var temp =   document.createElement('div')
                 temp.className = "card";
                        temp.textContent = (data.list[i].main.temp)
                var cardDeck = document.querySelector('#cardDeck')
                        cardDeck.appendChild(temp)
                var humidity = document.createElement('div')
                        humidity.textContent = ("humidity:", data.list[i].main.humidity)
                        temp.appendChild(humidity)
                var windSpeed= document.createElement('div')
                        windSpeed.textContent = ("Wind Speed:", data.list[i].wind.speed)
                        temp.appendChild(windSpeed)
                       console.log(data.list[i]);       
       
                    }

        const UV = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat="+data.city.coord.lat+"&lon="+data.city.coord.lon+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff";
            fetch(UV)
                .then(UVresponse => UVresponse.json())
                .then((UVdata) => {
                    for(let i = 0; i < UVdata.length; i++) {
                        console.log(UVdata[i].value);

                    
            var uvIndex = document.createElement('div')
                uvIndex.textContent = (UVdata[i].value)
                temp.appendChild(uvIndex)

                }

});
});
};
