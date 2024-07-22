const { noteService } = require("../services");

const findAll = async (req, res) => {
  const { user } = req;

  const notes = await noteService.findUserNotes(user.id);
  res.json(notes);
};

const createNote = async (req, res) => {
  try {
    const { user } = req;
    let params = { ...req.body, userId: user.id };

    let result = await noteService.createNote(params);

    res.json({
      message: "Note is created successfully",
      note: result,
    });
  } catch (err) {}
};

module.exports = {
  findAll,
  createNote,
};
