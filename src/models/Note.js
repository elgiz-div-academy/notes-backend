const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Note;
