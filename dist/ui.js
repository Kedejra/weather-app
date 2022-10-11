class UI
{
    constructor()
    {
        this.location=document.getElementById('location');
        this.icon=document.getElementById('weather-icon');
        this.temperature=document.getElementById('temp');
        this.description=document.getElementById('description');
        //ul elements
        this.details=document.getElementById('details');
        this.humidity=document.getElementById('humidity');
        this.precipitation=document.getElementById('precipitation');
        this.feelsLike= document.getElementById('feels-like');
        this.wind=document.getElementById('wind');
    }

    paint(weather)
    {
        this.location.textContent= weather.location.name +','+weather.location.country;
        this.description.textContent=weather.current.condition.text;
        this.temperature.textContent=weather.current.temp_c+'°C';
        this.icon.setAttribute('src',weather.current.condition.icon);
        
        this.feelsLike.textContent= 'Feels Like: '+weather.current.feelslike_c+'°C';
        this.precipitation.textContent= 'Precipitation (mm): '+weather.current.precip_mm;
        this.humidity.textContent= 'Humidity: '+weather.current.humidity+'%';
        this.wind.textContent= 'Wind (kph): '+weather.current.wind_kph;

    }
}