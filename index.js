const argv = require('yargs').argv;
let request = require('request');

let apiKey = 'c60b353787582d524de44fb04321f37d';
let city = argv.c || 'singapore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});