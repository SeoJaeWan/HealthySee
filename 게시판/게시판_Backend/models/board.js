/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('board', {
		BO_CODE: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BO_TITLE: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		BO_CONTENT: {
			type: DataTypes.STRING(2000),
			allowNull: false
		},
		BO_HIT: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		BO_CREATION_DATE: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		tableName: 'board',
		timestamps: false
	});
};
