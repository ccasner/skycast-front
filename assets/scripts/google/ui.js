'use strict'
const store = require('../store')
const darkApi = require('../darksky/api')
const darkUi = require('../darksky/ui')

const onSuccess = function (data) {
  store.location = data.location
  const id = store.location.id
  $('#city').html(store.location.address)
  console.log(data)
  darkApi.showWeather(id)
    .then(darkUi.onSuccess)
    .catch(darkUi.onFailure)
}

const onFailure = function (error) {
  console.log(error)
}

module.exports = {
  onSuccess,
  onFailure
}
