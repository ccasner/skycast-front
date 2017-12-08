'use strict'
const store = require('../store')

const onSuccess = function (data) {
  console.log(data)
  store.weather = data
  $('#temp').html(store.weather.currently.temperature)
  $('#summary').html(store.weather.hourly.summary)
  $('#icon').html(store.weather.currently.icon)
  $('#humidity').html(store.weather.currently.humidity)
  $('#wind').html(store.weather.currently.windSpeed)
  $('#visibility').html(store.weather.currently.visibility)
  $('#uv').html(store.weather.currently.uvIndex)
}

const onFailure = function (error) {
  console.log(error)
}

module.exports = {
  onSuccess,
  onFailure
}
