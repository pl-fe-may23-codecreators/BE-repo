/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const phones = require('../public/api/phones.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Phones',
      phones, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Phones', {
      phoneId: phones.map(v => v.phoneId)
    }, {})
  }
}
