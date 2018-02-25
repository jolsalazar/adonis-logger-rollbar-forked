'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Logentries = require('../Drivers/Logentries')

class LogentriesProvider extends ServiceProvider {
  register () {

    this.app.extend('Adonis/Src/Logger', 'logentries', () => {
      return new Logentries()
    })

  }

}

module.exports = LogentriesProvider
