'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Logentries = require('../drivers/Logentries')

class LogentriesProvider extends ServiceProvider {
  register () {

    this.app.extend('Adonis/Src/Logger', 'logentries', () => {
      return new Logentries()
    })

  }

}

module.exports = LogentriesProvider
