'use strict'
const store = require('../store')
const showForecast = require('../templates/forecast.handlebars')
const showSearches = require('../templates/searches.handlebars')
const darkApi = require('./api')

const onSuccess = function (data) {
  $('#recent-address').hide()
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
  const tempsArr = []
  for (let i = 0; i < 10; i++) {
    timesArr.push(store.weather.hourly.data[i].time)
    tempsArr.push(store.weather.hourly.data[i].temperature)
  }

  const roundedTemps = []
  tempsArr.forEach(function (temp) {
    const newTemp = Math.round(temp)
    roundedTemps.push(newTemp)
  })

  const convertedTime = []
  timesArr.forEach(function (time) {
    const date = new Date(time * 1000)
    const hour = date.getHours()
    convertedTime.push(hour)
  })
  const hourlyData = []
  for (let i = 0; i < 10; i++) {
    const hourly = {
      time: convertedTime[i],
      summary: store.weather.hourly.data[i].summary,
      temp: roundedTemps[i]
    }
    hourlyData.push(hourly)
  }
  $('#current-weather').show()
  $('#hourly-forecast-head').show()
  $('#hourly-forecast').show()
  const showForecastHourly = showForecast({ locations: hourlyData })
  $('#hourly-forecast').html(showForecastHourly)
}

const onDaySuccess = function (data) {
  store.location = data.location
  const id = store.location.id
  $('#city').html(store.location.address)
  darkApi.showWeather(id)
    .then(onSuccess)
    .catch(onFailure)
}
const onViewRecentSuccess = function (data) {
  $('#hourly-forecast').hide()
  $('#current-weather').hide()
  $('#recent-address').show()
  store.searches = data.locations
  const num = store.searches.length
  const searchArr = []
  for (let i = num - 1; i > num - 11; i--) {
    searchArr.push({
      address: store.searches[i].address
    })
  }
  const showRecentSearches = showSearches({ locations: searchArr })
  $('#recent-address').html(showRecentSearches)
}
const onFailure = function (error) {
  console.log(error)
}

module.exports = {
  onSuccess,
  onDaySuccess,
  onViewRecentSuccess,
  onFailure
}
