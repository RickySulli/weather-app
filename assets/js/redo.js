const weatherButton = document.getElementById("weatherButton");
const searchBar = document.getElementById("searchBar");
const currentCard = document.getElementById("currentCard");
const cityContainer = document.getElementById("cityContainer");
const fiveDay = document.getElementById("fiveDay");


weatherButton.onclick = function(event){
    event.preventDefault()
    const city = searchBar.value;
        const url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff&units=imperial";
        //fetch url
            fetch(url)
                .then(response => response.json())
                .then((data) =>{
                    for(let i = 4; i < data.list.length; i+=8) {
              var weather = document.querySelector('#currentCard');
                        



                        console.log(data.list[i]);
                
        }

        const UV = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat="+data.city.coord.lat+"&lon="+data.city.coord.lon+"&appid=9c3f1783d9cdb00d3040091d76f0e1ff";
            fetch(UV)
                .then(UVresponse => UVresponse.json())
                .then((UVdata) => {
                    for(let i = 0; i < UVdata.length; i++) {
                        console.log(UVdata[i]);
                    }
});
});
};
