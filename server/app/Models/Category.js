'use strict'

const Env = use('Env')
const Model = use('Model')

class Category extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ path }) {
    return `${Env.get('APP_URL')}/categories/${path}`
  }
}

module.exports = Category
