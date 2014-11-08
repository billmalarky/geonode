"use strict";

module.exports = function(sequelize, DataTypes) {
  var Geoname = sequelize.define(
        "Geoname", 
        {
            geonameid: { type: DataTypes.INTEGER, primaryKey: true},
            name: DataTypes.STRING(200),
            asciiname: DataTypes.STRING(200),
            alternatenames: DataTypes.STRING(4000),
            latitude: DataTypes.DECIMAL(10,7),
            longitude: DataTypes.DECIMAL(10,7),
            fclass: DataTypes.STRING(1),
            fcode: DataTypes.STRING(10),
            country: DataTypes.STRING(2),
            cc2: DataTypes.STRING(60),
            admin1: DataTypes.STRING(20),
            admin2: DataTypes.STRING(80),
            admin3: DataTypes.STRING(20),
            admin4: DataTypes.STRING(20),
            population: DataTypes.INTEGER,
            elevation: DataTypes.INTEGER,
            gtopo30: DataTypes.INTEGER,
            timezone: DataTypes.STRING(40),
            moddate: DataTypes.DATE
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'geoname'
        }
  );

  return Geoname;
};