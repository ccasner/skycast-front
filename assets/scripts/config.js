'use strict'

const config = {
  apiOrigins: {
    production: 'https://cors-anywhere.herokuapp.com/https://skycast-railsapi.herokuapp.com',
    darkSky: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/',
    google: 'https://maps.googleapis.com/maps/api/geocode/json?address='
  }
}
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
module.exports = config
