'use strict'

const config = require('../config')

const showWeather = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + id,
    method: 'GET'
  })
}

const showDay = function (id, unixTime) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + id,
    method: 'GET',
    data: {
      'forecast': unixTime
    }
  })
}

module.exports = {
  showWeather,
  showDay
}
