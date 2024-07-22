const Note = require("../models/Note");

const findUserNotes = async (userId) => {
  const notes = await Note.findAll({ where: { userId } });
  return notes;
};

const createNote = async (params) => {
  const { title, description, userId } = params || {};

  let note = await Note.create({ title, description, userId });

  return note;
};

module.exports = {
  findUserNotes,
  createNote,
};
