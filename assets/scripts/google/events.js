'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const googleApi = require('./api')
const googleUi = require('./ui')

const onSearchCity = function (event) {
  event.preventDefault()
  const city = getFormFields(event.target)
  const address = city.address
  const unixTime = Math.round((new Date()).getTime() / 1000)
  const time = unixTime.toString()
  console.log(time)
  googleApi.showCity(address, time)
    .then(googleUi.onSuccess)
    .catch(googleUi.onFailure)
}

module.exports = {
  onSearchCity
}
