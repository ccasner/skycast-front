'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const darkApi = require('./api')
const darkUi = require('./ui')

const onGetWeather = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const long = data.long
  const lat = data.lat
  console.log(event.target)
  console.log(data)
  darkApi.show(lat, long)
    .then(darkUi.onSuccess)
    .catch(darkUi.onFailure)
}

module.exports = {
  onGetWeather
}
