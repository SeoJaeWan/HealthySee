module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "e_evaluation_view",
      {
        EEV_Code: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          primaryKey: true,
          comment: "null",
          autoIncrement: true,
        },
        EEV_Writer_NickName: {
          type: DataTypes.STRING(16),
          allowNull: false,
          comment: "null",
        },
        EEV_Rank: {
          type: DataTypes.FLOAT,
          allowNull: false,
          comment: "null",
        },
        EEV_Content: {
          type: DataTypes.STRING(1000),
          allowNull: true,
          comment: "null",
        },
        EEV_State:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue : 0,
          },
        EEV_Creation_Date: {
          type: DataTypes.DATE,
          allowNull: false,
          comment: "null",
        },
        Exercise_EX_Name: {
          type: DataTypes.STRING(20),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          references: {
            model: "Exercise",
            key: "EX_Name",
          },
        },
        EEV_Report_Count:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
      },
      {
        tableName: "e_evaluation_view",
        timestamps: false,
      }
    );
  };