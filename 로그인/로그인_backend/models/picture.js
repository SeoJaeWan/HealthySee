/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('picture', {
		P_Code: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
        },
        P_Picture: {
            type: DataTypes.BLOB("long"),
            allowNull: true,
          },
        Album_AL_Code: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
            references: {
                model: 'album',
                key: 'AL_Code'
            }
        },
	}, {
		tableName: 'picture',
		timestamps: false,
	});
};
