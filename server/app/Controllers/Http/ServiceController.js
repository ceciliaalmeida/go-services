'use strict'

const Service = use('App/Models/Service')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with properties
 */
class ServiceController {
  /**
   * Show a list of all properties.
   * GET properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {

    const services = Service.query()
      .with('images')
      .fetch()

    return services
  }

  /**
   * Create/save a new property.
   * POST properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  const data = request.only([
    'title',
    'description',
    'price',
    'city',
    'uf'
  ])

  const service = await Service.create({ ...data })

  return service
}

  /**
   * Display a single property.
   * GET properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const service = await Service.findOrFail(params.id)

    await service.load('images')

    return service
  }

  /**
   * Update property details.
   * PUT or PATCH properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const service = await Service.findOrFail(params.id)

    const data = request.only([
      'title',
      'description',
      'price',
      'city',
      'uf'
    ])

    service.merge(data)

    await service.save()

    return service
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const service = await Service.findOrFail(params.id)
    await service.delete()
  }
}

module.exports = ServiceController
