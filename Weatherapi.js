var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true')
request.send();
request.onload=function(){
var data=JSON.parse(this.response)
var subRquest= new XMLHttpRequest();
lat=+data[104].latlng[0];
lon=+data[104].latlng[1];
country=data[104].alpha2Code;
subRquest.open('GET',`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&country=${country}&appid=c6623f165181fcc12d0cc18236518daf`
,'true')
subRquest.send();
subRquest.onload=function(){
    var subRquest=JSON.parse(this.response)
    console.log(subRquest)
    console.log("Temperature is:"+subRquest.main.temp)
    console.log("WeatherDescription is:"+subRquest.weather[0].description)

}
}



