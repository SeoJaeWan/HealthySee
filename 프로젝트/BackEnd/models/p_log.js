/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "p_log",
    {
      LO_Code: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      LO_Time: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: "null",
      },
      LO_Player_NickName: {
        type: DataTypes.STRING(16),
        allowNull: false,
        comment: "null",
      },
      LO_Success_Count: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: "null",
      },
      LO_Fault_Count: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: "null",
      },
      LO_Creation_Date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "null",
      },
      LO_Re_Ref: {
        type: DataTypes.INTEGER(11),
        comment: "null",
      },
      Plan_PL_Code: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: "plan",
          key: "PL_Code",
        },
      },
    },
    {
      tableName: "p_log",
      timestamps: false,
    }
  );
};
