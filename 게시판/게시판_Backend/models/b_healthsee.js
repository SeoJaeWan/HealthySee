/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('b_healthsee', {
		BH_CODE: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BH_CREATION_DATE: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		BOARD_BO_CODE: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'board',
				key: 'BO_CODE'
			}
		}
	}, {
		tableName: 'b_healthsee',
		timestamps: false
	});
};
