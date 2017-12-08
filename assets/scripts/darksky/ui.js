'use strict'
const store = require('../store')
const showForecast = require('../templates/forecast.handlebars')

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
  getForecast()
}

const getForecast = function () {
  const timesArr = []
  for (let i = 0; i < 12; i++) {
    timesArr.push(store.weather.hourly.data[i].time)
  }
  const convertedTime = []
  timesArr.forEach(function (time) {
    const date = new Date(time * 1000)
    const hour = date.getHours()
    convertedTime.push(hour)
  })
  console.log(convertedTime)

  const showForecastHourly = showForecast({ locations: store.weather.hourly.data })
  $('#hourly-forecast').html(showForecastHourly)
  console.log(store.weather.hourly.data)
}

const onFailure = function (error) {
  console.log(error)
}

module.exports = {
  onSuccess,
  onFailure
}
