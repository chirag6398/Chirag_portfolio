const express = require("express");
const router = express.Router();
const userModel = require("../model/userSchema");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b9d3e6085b3c08",
    pass: "c80432bb5a4a2e",
  },
});
router.post("/api/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    if (!name || !email || !message) {
      console.log("not fill completely");
      return res
        .status(401)
        .json({ error: "plz fill all fields", status: 401 });
    } else {
      const userExist = await userModel.findOne({ email });
      // if (userExist) {
      //   console.log("user Exist");
      //   return res.status(401).json({ message: "user exist", status: 401 });
      // } else {
      const newUser = new userModel({ name, email, message });
      const userStatus = await newUser.save();

      if (userStatus) {
        console.log(userStatus);
        let mailOptions = {
          from: "no-reeply@gmail.com", // sender address
          to: userStatus.email, // list of receivers
          subject: "message recieve confirmation", // Subject line
          text: `hello ${userStatus.name} thanks for messaging i will get in touch with you asap`, // plain text body
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return;
            // console.log(error);
          }
          console.log(info);
          res.json(info);
        });
        console.log("user save");

        return res
          .status(201)
          .json({ message: "message send successfully", status: 201 });
      } else {
        console.log("user not save");
        return res
          .status(401)
          .json({ message: "message not save", status: 401 });
        // }
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
