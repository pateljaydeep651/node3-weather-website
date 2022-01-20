const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=98f2d4a2d25cc1f2ddc265f77f2e0ba9&query=' + latitude + ',' + longitude 

    request({url, json: true}, (error,{ body }) => {

        if(error){
            callback('Unable to connect weather service', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees and it feels like ' + body.current.feelslike + ' degrees out and humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast