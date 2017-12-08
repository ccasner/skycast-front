'use strict'

const config = require('../config')

const showWeather = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + id,
    method: 'GET'
  })
}

module.exports = {
  showWeather
}
