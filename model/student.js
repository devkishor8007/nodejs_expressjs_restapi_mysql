module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "student",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        defaultValue: "test@gmail.com",
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      // by default timestamp is creating in our table row if you want to delete it, you can do timestamps:false
      //   timestamps: false,
      //   updatedAt: false,
      //   createdAt: false,
      // we can create and change the table name, field name from here
      // tableName:'createnewtable'
      // createdAt:'change-create_at'
    }
  );
  return Student;
};
