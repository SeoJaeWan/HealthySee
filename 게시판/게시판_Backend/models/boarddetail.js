/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('boarddetail', {
		BO_CODE: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
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
		},
		BO_COMMENT_COUNT: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BO_HEALTHSEE_COUNT: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BO_REPORT_COUNT: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'boarddetail',
		timestamps: false
	});
};
