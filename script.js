
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc868ffa8fmshe7ddfb3776ccb85p19cd39jsn201bb6dfd741',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

//Function to fetch API
const getWeather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response => response.json())
    .then((response) => {
        humidity2.innerHTML = response.humidity;
        temp2.innerHTML  = response.temp;
        wind_speed2.innerHTML  = response.wind_speed;
        cityName.innerHTML = city;
        feels_like.innerHTML  = response.feels_like;
        temp.innerHTML  = response.temp;
        humidity.innerHTML  = response.humidity;
        cloud_pct.innerHTML  = response.cloud_pct;
        wind_speed.innerHTML  = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML   = response.sunrise;
        sunset.innerHTML   = response.sunset;
        console.log(response);
    })
    .catch(error=> console.log(error));
}

//Adding EventListener to Search Button
submit.addEventListener('click',(e)=>{
    e.preventDefault(); //to prevent reloading in browser
    getWeather(city.value) //To Pass the 'city' name to function 'getWeathger'
})

getWeather('Delhi') //By Default


//Lower Section(Imp Cities)
//For Delhi
const delhi = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
    .then(response => response.json())
    .then((response) => {
        tempdel.innerHTML  = response.temp;
        feels_like_del.innerHTML  = response.feels_like;
        humiditydel.innerHTML = response.humidity;
        wind_speed_del.innerHTML  = response.wind_speed;
        sunrisedel.innerHTML   = response.sunrise;
        sunsetdel.innerHTML   = response.sunset;
        console.log(response);
    })
    .catch(error=> console.log(error));
}

//For Kolkata
const kolkata = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',options)
    .then(response => response.json())
    .then((response) => {
        tempkol.innerHTML  = response.temp;
        feels_like_kol.innerHTML  = response.feels_like;
        humiditykol.innerHTML = response.humidity;
        wind_speed_kol.innerHTML  = response.wind_speed;
        sunrisekol.innerHTML   = response.sunrise;
        sunsetkol.innerHTML   = response.sunset;
        console.log(response);
    })
    .catch(error=> console.log(error));
}

//For Mumbai
const Mumbai = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
    .then(response => response.json())
    .then((response) => {
        tempmumb.innerHTML  = response.temp;
        feels_like_mumb.innerHTML  = response.feels_like;
        humiditymumb.innerHTML = response.humidity;
        wind_speed_mumb.innerHTML  = response.wind_speed;
        sunrisemumb.innerHTML   = response.sunrise;
        sunsetmumb.innerHTML   = response.sunset;
        console.log(response);
    })
    .catch(error=> console.log(error));
}

//For Banglore 
const Bangalore = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Bangalore',options)
    .then(response => response.json())
    .then((response) => {
        tempbang.innerHTML  = response.temp;
        feels_like_bang.innerHTML  = response.feels_like;
        humiditybang.innerHTML = response.humidity;
        wind_speed_bang.innerHTML  = response.wind_speed;
        sunrisebang.innerHTML   = response.sunrise;
        sunsetbang.innerHTML   = response.sunset;
        console.log(response);
    })
    .catch(error=> console.log(error));
}

Mumbai();
Bangalore();
kolkata();
delhi();