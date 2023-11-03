'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PhoneDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      namespaceId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      capacityAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      capacity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      priceRegular: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      priceDiscount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      colorsAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      description: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        allowNull: false
      },
      screen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resolution: {
        type: Sequelize.STRING,
        allowNull: false
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: false
      },
      camera: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zoom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PhoneDetails');
  }
};