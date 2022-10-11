class Storage
{
    constructor()
    {
        this.city;
        this.country;

        this.defaultCity='Toronto';
        this.defaultCountry='Canada';
    }

    getLocationData()
    {
        //Checking for country value in local storage
        if(localStorage.getItem('city') === null)
        {
            this.city=this.defaultCity;
        }
        else
        {
            this.city=localStorage.getItem('city');
        }

        //Checking for country value in local storage
        if(localStorage.getItem('country') === null)
        {
            this.country=this.defaultCountry;
        }
        else
        {
            this.country=localStorage.getItem('country');
        }
        return{ city: this.city,
            country: this.country}
        
    }

    setLocationData(city,country)
    {
        localStorage.setItem('city',city);
        localStorage.setItem('country',country);
    }
}