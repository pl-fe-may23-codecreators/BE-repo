'use strict';

const first_phone = require('../public/api/phones/apple-iphone-7-32gb-black.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PhoneDetails',
        [first_phone], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhoneDetails', {
    }, {})
  }
};
