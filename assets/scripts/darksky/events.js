'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const darkApi = require('./api')
const darkUi = require('./ui')

const onGetWeather = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data.time)
  const unixTime = new Date(data.time).getTime() / 1000
  console.log(unixTime)
  const id = 45
  darkApi.showDay(id, unixTime)
    .then(darkUi.onSuccess)
    .catch(darkUi.onFailure)
}

module.exports = {
  onGetWeather
}
