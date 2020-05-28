/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('b_comment', {
		BC_Code: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BC_Content: {
			type: DataTypes.STRING(1000),
			allowNull: false
		},
		BC_Creation_Date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		BC_RE_REF: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Board_BO_Code: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'board',
				key: 'BO_CODE'
			}
		}
	}, {
		tableName: 'b_comment',
		timestamps: false
	});
};
