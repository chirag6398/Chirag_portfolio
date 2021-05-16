const mongoose = require("mongoose");
const Db = process.env.DataBase;

mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log(err);
  });
