'use strict'

const config = require('../config')

const show = function (lat, long) {
  return $.ajax({
    url: config.apiOrigins.darkSky + process.env.DS_SECRET_KEY + '/' + lat + ',' + long,
    method: 'GET'
  })
}

module.exports = {
  show
}
