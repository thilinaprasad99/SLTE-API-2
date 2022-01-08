'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('Users',
        'isLoggedIn',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
          allowNull: false
        }
      );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.removeColumn('Users', 'isLoggedIn');

  }
};