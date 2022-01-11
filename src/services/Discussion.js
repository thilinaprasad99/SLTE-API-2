const { sequelize } = require("../../models");
const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  getDiscussions: async (info, callback) => {
    try {
      const query =
        "SELECT * FROM discussions INNER JOIN results ON discussions.quiz_title = results.quiz_title WHERE results.index_number =:userId;";
      const data = await sequelize.query(query, {
        replacements: {
          userId: info.id,
        },
        type: sequelize.QueryTypes.SELECT,
      });

      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: data,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },
};
