'use strict';

const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const directory = path.join(__dirname, '../public/api/phones');
    const phoneFiles = fs.readdirSync(directory);
    let phonesDetails = [];

    phoneFiles.forEach(phoneFile => {
      const phonePath = path.join(directory, phoneFile);
      const phoneData = fs.readFileSync(phonePath);
      const dataString = phoneData.toString('utf-8');

      phonesDetails.push(JSON.parse(dataString));
    });

    phonesDetails = phonesDetails.map(phone => ({
      ...phone,
      description: JSON.stringify(phone.description),
    }))

    await queryInterface.bulkInsert('PhoneDetails',
        phonesDetails, {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhoneDetails', {
    }, {})
  }
};
