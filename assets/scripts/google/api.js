'use strict'

const config = require('../config')

const googleKey = process.env.GOOGLE_SECRET_KEY

const show = function (data) {
  return $.ajax({
    url: config.apiOrigins.google + googleKey,
    method: 'POST',
    data: {

    }
  })
}
