'use strict'

const Schema = use('Schema')

class ServicesSchema extends Schema {
  up () {
    this.create('services', table => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('price').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServicesSchema
