'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Board = require('./board')(sequelize,Sequelize);
db.B_Comment = require('./b_comment')(sequelize, Sequelize);
db.BoardDetail = require('./boarddetail')(sequelize,Sequelize);
db.BoardList = require('./boardlist')(sequelize, Sequelize);
db.B_Healthsee = require('./b_healthsee')(sequelize,Sequelize);
db.B_Reporter= require('./b_repoter')(sequelize, Sequelize);


// db.Board.hasMany(db.B_Comment, {foreignKey:'Board_Bo_CODE', sourceKey:'BO_CODE'})
// db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});






module.exports = db;
