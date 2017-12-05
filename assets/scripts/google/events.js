'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const onSearchCity = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
}

module.exports = {
  onSearchCity
}
