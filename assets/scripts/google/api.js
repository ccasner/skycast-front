'use strict'

const config = require('../config')

// const googleKey = process.env.GOOGLE_SECRET_KEY

const showCity = function (city) {
  console.log(city)
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
