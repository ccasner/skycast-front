'use strict'

const config = require('../config')

const darkKey = process.env.DS_SECRET_KEY

const show = function (lat, long) {
  return $.ajax({
    url: config.apiOrigins.darkSky + darkKey + '/' + lat + ',' + long,
    method: 'GET'
  })
}

module.exports = {
  show
}
