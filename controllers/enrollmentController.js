const Enrollment = require('../models/Enrollment');

exports.enrollStudent = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.create({
      class: req.params.classId,
      student: req.body.studentId,
    });
    res.status(201).json({ success: true, data: enrollment });
  } catch (error) {
    next(error);
  }
};
