'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Service extends Model {

  images () {
    return this.hasMany('App/Models/Image')
  }
}

module.exports = Service
