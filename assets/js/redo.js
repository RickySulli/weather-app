const weatherButton = document.getElementById("weatherButton");
const searchBar = document.getElementById("searchBar");
const currentCard = document.getElementById("currentCard");
const cityContainer = document.getElementById("cityContainer");
const fiveDay = document.getElementById("fiveDay");


function clearUi(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//create a global variable to store cities in an array.
var cities = [];
weatherButton.onclick = function(event){
    event.preventDefault()
    var cardDeckEl = document.getElementById("cardDeck");
        clearUi(cardDeckEl);
    const city = searchBar.value;
    
        const url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff&units=imperial";
       //create dynamic title card for weather
       
       var currentCard = document.querySelector('#currentCard')
            clearUi(currentCard);
            var intro = document.createElement('div')
                intro.className = "h2";
                intro.textContent = "5 day forecast for: "
                    currentCard.appendChild(intro)
            var cityName = document.createElement ('div')
                cityName.className = "h1";
                cityName.textContent = (city)
                    currentCard.appendChild(cityName) 
            var today = document.createElement('h3')
                    today.textContent = "UV index:"
                    currentCard.appendChild(today)
            
 //fetch url
             fetch(url)   
                .then(response => response.json())
                .then((data) =>{
                    for(let i = 4; i < data.list.length; i+=8) {
                //five day forecast      
                
                var temp =   document.createElement('div')
                        temp.className = "card";
                        temp.id = "dayCard";
                        temp.textContent = `${data.list[i].main.temp}°F`;
                        Math.round(temp);

                var cardDeck = document.querySelector('#cardDeck')
                        cardDeck.appendChild(temp)
                var humidity = document.createElement('div')
                        humidity.textContent = `${data.list[i].main.humidity}% humidity`;
                        temp.appendChild(humidity)
                var windSpeed= document.createElement('div')
                       windSpeed.textContent = `Wind:${data.list[i].wind.speed}MPH`;
                        temp.appendChild(windSpeed)
                        console.log(data.list[i]);       
                var  icon = document.createElement('img')
                        icon.className = "d-flex justify-content-center"
                var iconUrl = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
                        icon.setAttribute("src", iconUrl)
                            temp.appendChild(icon)    
                    }

        const UV = "http://api.openweathermap.org/data/2.5/uvi?lat="+data.city.coord.lat+"&lon="+data.city.coord.lon+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff";
            fetch(UV)
                .then(UVresponse => UVresponse.json())
                .then((UVdata) => {
                    console.log(UVdata);

           var dayCard = document.getElementById('dayCard');      
            var uvIndex = document.createElement('div')
                uvIndex.textContent = (UVdata.value)
                currentCard.appendChild(uvIndex) 
                
                if (UVdata.value > 7) {
                    document.querySelector("#currentCard").className = "bg-danger";
                } else if (UVdata.value >= 2 && UVdata.value <= 7) {
                    document.querySelector("#currentCard").className = "bg-warning";
                } else if (UVdata.value <= 2) {
                    document.querySelector("#currentCard").className = "bg-success";
                }


                localStorage.setItem("cities", JSON.stringify(city));
                console.log(city);
           
        //    var searchedCity = document.createElement('li')
        //     var cityContainer = document.querySelector('#cityContainer')
        //         searchedCity.className = "page-item";
        //         searchedCity.textContent =  JSON.parse(localStorage.getItem('city'))
        //         cityContainer.appendChild(searchedCity)
           
        //     var cityLink = document.createElement('a')
        //     var cityLi = document.querySelector('#page-item')
        //         cityLink.className = "page-link";
        //         cityLink.textContent = JSON.parse(localStorage.getItem('city'))
        //         searchedCity.appendChild(cityLi)
        //         console.log(localStorage);   

});
});
};
