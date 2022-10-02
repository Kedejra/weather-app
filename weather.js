class Weather
{
    // Utilizing OpenWeather
    constructor(city,country)
    {
        this.key= '809492dc88a9448496d33344220210';

        this.city= city;
        this.country=country;
    }

    // Fetch weather from api
    
    async getWeather()
    {
        const response= await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city},${this.country}&aqi=no&SameSite=Strict`);
        const responseData= await response.json();

        console.log(`hi ${this.city},${this.country}`);
        return responseData;
    }
    
    //Changing Location
    changeLocation(city,country)
    {
        this.city=city;
        this.country=country;
        
    }
    
}