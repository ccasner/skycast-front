'use strict'

const config = require('../config')

const showCity = function (address, time) {
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'POST',
    data: {
      'location': {
        'address': address,
        'time': time
      }
    }
  })
}

module.exports = {
  showCity
}
