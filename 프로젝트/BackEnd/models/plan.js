/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "plan",
    {
      PL_Code: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        primaryKey: true,
        comment: "null",
        autoIncrement: true,
      },
      PL_Writer_NickName: {
        type: DataTypes.STRING(16),
        allowNull: false,
        comment: "null",
      },
      PL_RestTIme: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
        comment: "null",
      },
      PL_Description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "null",
      },
      PL_Creation_Date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "null",
      },
      PL_Routine_1: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "null",
      },
      PL_Time_1: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Count_1: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Routine_2: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "NoN",
        comment: "null",
      },
      PL_Time_2: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Count_2: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Routine_3: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "NoN",
        comment: "null",
      },
      PL_Time_3: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Count_3: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Routine_4: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "NoN",
        comment: "null",
      },
      PL_Count_4: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Time_4: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Routine_5: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "NoN",
        comment: "null",
      },
      PL_Time_5: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Count_5: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
        comment: "null",
      },
      PL_Set_Count: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
        comment: "null",
      },
      PL_Scope: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: "1",
        comment: "null",
      },
    },
    {
      tableName: "plan",
      timestamps: false,
    }
  );
};
