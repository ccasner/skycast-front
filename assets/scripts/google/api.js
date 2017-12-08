'use strict'

const config = require('../config')

const showCity = function (city) {
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'POST',
    data: {
      'address': city
    }
  })
}

module.exports = {
  showCity
}
