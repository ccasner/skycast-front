'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const darkApi = require('./api')
const darkUi = require('./ui')

const onGetWeather = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const unixTime = new Date(data.time).getTime() / 1000
  const address = data.address
  darkApi.showDay(address, unixTime)
    .then(darkUi.onDaySuccess)
    .catch(darkUi.onFailure)
}
const onViewRecent = function (event) {
  event.preventDefault()
  darkApi.viewRecent()
    .then(darkUi.onViewRecentSuccess)
    .catch(darkUi.onFailure)
}

module.exports = {
  onGetWeather,
  onViewRecent
}
