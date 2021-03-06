window.varCraft = window.varCraft || {};
window.varCraft.weatherModel =  window.varCraft.weatherModel || {};

window.varCraft.weatherModel = (function(nameSpace){
    var forecast = {};
    forecast.yesterday = {};
    forecast.today = {};
    forecast.tomorrow = {};
    var location = "";

    forecast.yesterday.date = "";
    forecast.yesterday.weatherCondition = "";
    forecast.yesterday.temperatureAtDay = "";
    forecast.yesterday.temperatureAtNight = "";
    forecast.yesterday.windSpeed = "";
    forecast.yesterday.windDirection = "";
    forecast.yesterday.moonPhase = "";
    forecast.yesterday.humidity = 1;
    forecast.yesterday.humidityTitle = "";

    forecast.today.date = "";
    forecast.today.weatherCondition = "";
    forecast.today.temperatureAtDay = "";
    forecast.today.temperatureAtNight = "";
    forecast.today.windSpeed = "";
    forecast.today.windDirection = "";
    forecast.today.moonPhase = "";
    forecast.today.humidity = 1;
    forecast.today.humidityTitle = "";

    forecast.tomorrow.date = "";
    forecast.tomorrow.weatherCondition = "";
    forecast.tomorrow.temperatureAtDay = "";
    forecast.tomorrow.temperatureAtNight = "";
    forecast.tomorrow.windSpeed = "";
    forecast.tomorrow.windDirection = "";
    forecast.tomorrow.moonPhase = "";
    forecast.tomorrow.humidity = 1;
    forecast.tomorrow.humidityTitle = "";

    return {
        setWeather: function(day, newForecast){
            if(forecast[day] && typeof newForecast === "object"){
                forecast[day].date = newForecast.date;
                forecast[day].weatherCondition = newForecast.weatherCondition;
                forecast[day].temperatureAtDay = newForecast.temperatureAtDay;
                forecast[day].temperatureAtNight = newForecast.temperatureAtNight;
                forecast[day].windSpeed = newForecast.windSpeed;
                forecast[day].windDirection = newForecast.windDirection;
                forecast[day].moonPhase = newForecast.moonPhase;
                forecast[day].humidity = newForecast.humidity;
                forecast[day].humidityTitle = newForecast.humidityTitle;
                //console.log(forecast[day]);
            }
        },
        getWeather: function(day){
            if(forecast[day]){
                return forecast[day];
            }
        },
        setLocation: function(newLocation){
            if(typeof location === "string"){
                location = newLocation;
                console.log("[weatherModel lcoation]:", location);
            }
            else console.log("[weatherModel setLocation func]: newLocation should be string");
        },
        getLocation: function(){
            return location;
        }
    };
})(window.varCraft);
