const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./Routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

// 63983565286398356528  sendgrid password
