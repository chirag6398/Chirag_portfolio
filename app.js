const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config.env" });

app.use(express.static(path.resolve(__dirname, "client/build")));
require("./db/conn");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./Routes/auth"));

const PORT = process.env.PORT || 5000;

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
