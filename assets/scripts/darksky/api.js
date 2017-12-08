'use strict'

const config = require('../config')

const showWeather = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + id,
    method: 'GET'
  })
}

const showDay = function (address, unixTime) {
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'POST',
    data: {
      'location': {
        'address': address,
        'time': unixTime
      }
    }
  })
}
const viewRecent = function () {
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'GET'
  })
}

module.exports = {
  showWeather,
  showDay,
  viewRecent
}
