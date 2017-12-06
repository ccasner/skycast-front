'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const googleApi = require('./api')
const googleUi = require('./ui')

const onSearchCity = function (event) {
  event.preventDefault()
  const city = getFormFields(event.target)
  console.log(city)
  googleApi.showCity(city)
    .then(googleUi.onSuccess)
    .catch(googleUi.onFailure)
}

module.exports = {
  onSearchCity
}
