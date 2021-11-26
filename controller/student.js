const db = require("../db");
const Student = db.student;
const { Sequelize, Op } = require("sequelize");

exports.addStudent = async (req, res) => {
  const { name, email, gender } = req.body;
  await Student.create({
    name,
    email,
    gender,
  });

  res.status(200).json({ data: "Successfully added" });
};

exports.addStudentFields = async (req, res) => {
  const { name, email, gender } = req.body;
  await Student.create(
    {
      name,
      email,
      gender,
    },
    {
      // using fields
      // accept those field only whose is in the fields
      fields: ["email", "name"],
    }
  );

  res.status(200).json({ data: "Successfully added" });
};

exports.getStudent = async (req, res) => {
  const getData = await Student.findAll({
    order: [["name"]], // by default ascending order
    // order: [["name",'DESC']],
  });
  res.status(200).json({ count: getData.length, data: getData });
};

exports.getStudentAttribute = async (req, res) => {
  const getData = await Student.findAll({
    attributes: ["name", "email"],
    limit: 2,
  });
  res.status(200).json({ data: getData });
};

// include - exclude
// use of include, add some fields with data
// use of exclude, can't see those specify data field
exports.getStudentExcludeInclude = async (req, res) => {
  const getData = await Student.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
      include: [
        [Sequelize.fn("CONCAT", Sequelize.col("name"), " Poudel"), "full name"],
      ],
    },
  });
  res.status(200).json({ data: getData });
};

exports.getStudentQuery = async (req, res) => {
  const getData = await Student.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: getData });
};

// use operator
exports.getStudentOperator = async (req, res) => {
  const getData = await Student.findAll({
    where: {
      id: {
        [Op.gt]: 2,
        // [Op.eq]: req.params.id,
      },
      email: {
        [Op.like]: "%@gmail",
      },
    },
    order: [["name", "DESC"]],
    offset: 1,
  });

  return res.status(200).json({ data: getData });
};

exports.updateStudent = async (req, res) => {
  const { name, email, gender } = req.body;

  if (name == "" || email == "" || gender == "") {
    return res.status(200).json({ data: "Successfully update" });
  }

  await Student.update(
    { name, email, gender },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.status(200).json({ data: "Successfully update" });
};

exports.deletStudent = async (req, res) => {
  await Student.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json({ data: "Successfully delete" });
};

// Student.destroy({
//   truncate: true,
// });

// findOne({});
