const Class = require('../models/Class');

exports.createClass = async (req, res, next) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json({ success: true, data: newClass });
  } catch (error) {
    next(error);
  }
};

exports.getClasses = async (req, res, next) => {
  try {
    const classes = await Class.find();
    res.status(200).json({ success: true, data: classes });
  } catch (error) {
    next(error);
  }
};
