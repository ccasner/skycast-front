'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const googleApi = require('./api')

const onSearchCity = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  googleApi.show(data)
}

module.exports = {
  onSearchCity
}
