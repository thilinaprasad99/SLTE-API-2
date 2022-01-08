'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('Users',
        'isLoggedIn',
        {
          type: Sequelize.INTEGER,
          defaultValue: 1,
          allowNull: false
        }
      );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.removeColumn('Users', 'isLoggedIn');

  }
};