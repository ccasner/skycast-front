'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const darkEvents = require('./darksky/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#darksky-search').on('submit', darkEvents.onGetWeather)
})
