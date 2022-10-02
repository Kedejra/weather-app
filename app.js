
//INIT UI CLASS
const ui= new UI();

//Init Storage Class

const storage=new Storage();

//Get Stored Location Data
const weatherLocation=storage.getLocationData();


//Initialize weather class
const weather= new Weather(weatherLocation.city,weatherLocation.country);

//GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded',getWeather);

//Change Location Event
document.getElementById('change-btn').addEventListener('click', (e) =>
{
    const city= document.getElementById('city').value;
    const country= document.getElementById('country').value;

    //changing the location
    weather.changeLocation(city,country);

    //Persist to Local Storage
    storage.setLocationData(city,country);
   
    //Putting new location results in UI
    getWeather();

    //Resetting/clearing the form
    document.getElementById('weather-form').reset();
    
});


function getWeather()
{
    weather.getWeather()
.then(results =>
    {
        ui.paint(results);
    })

.catch(err => console.log(err));

}
