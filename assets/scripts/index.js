'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const darkEvents = require('./darksky/events')
const googleEvents = require('./google/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#darksky-search').on('submit', darkEvents.onGetWeather)
  $('#google-search').on('submit', googleEvents.onSearchCity)
  $('#recents').on('submit', darkEvents.onViewRecent)
})
