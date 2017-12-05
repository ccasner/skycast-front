'use strict'

const onSuccess = function (data) {
  console.log(data)
}

const onFailure = function (error) {
  console.log(error)
}

module.exports = {
  onSuccess,
  onFailure
}
