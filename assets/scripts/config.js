'use strict'

const config = {
  apiOrigins: {
    production: 'https://skycast-railsapi.herokuapp.com/',
    darkSky: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/',
    google: 'https://www.googleapis.com/geolocation/v1/geolocate?key='
  }
}

module.exports = config
