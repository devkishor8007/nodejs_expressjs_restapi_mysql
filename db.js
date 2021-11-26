const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("learn_database", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("Not Connected" + e);
  });

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

// if we have sync force true return first delete the matching db and then again creating db
// if we have sync force false return creating, inserting and canot be change automatically
db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-shrink");
});

db.student = require("./model/student")(sequelize, DataTypes);
module.exports = db;
