window.varCraft = window.varCraft || {};
window.varCraft.weatherController =  window.varCraft.weatherController || {};

window.varCraft.weatherController = (function(namespace){
	function start(){
		namespace.weatherView._init();


		this.changeForecast = function(){
                namespace.xhr.getAsync("http://localhost:3000/weather?"+ "location=" + namespace.weatherModel.getLocation(), function(){
                        var resp = JSON.parse(this.responseText);
                        //console.log(resp);

                        namespace.weatherModel.setWeather("yesterday", resp.yesterday);
                        namespace.weatherView.refreshForecast("yesterday", namespace.weatherModel.getWeather("yesterday"));

                        namespace.weatherModel.setWeather("today", resp.today);
                        namespace.weatherView.refreshForecast("today", namespace.weatherModel.getWeather("today"));

                        namespace.weatherModel.setWeather("tomorrow", resp.tomorrow);
                        namespace.weatherView.refreshForecast("tomorrow", namespace.weatherModel.getWeather("tomorrow"));
                });

		};

        this.setLocation = function(newLocation){
            namespace.weatherModel.setLocation(newLocation);
        };

        this.setDefault = function(){
            namespace.weatherView.refreshForecast("default");
            console.log("[weatherController]: setDefault run")
        }

	}

    return {
        _start: start
    };
})(window.varCraft);