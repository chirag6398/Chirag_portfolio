const express = require("express");
const router = express.Router();
const userModel = require("../model/userSchema");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: false,
  tls: { rejectUnauthorized: false },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log("not ready", error);
  } else {
    console.log("Server is ready to take our messages");
  }
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
      const newUser = new userModel({ name, email, message });
      const userStatus = await newUser.save();
      // await userModel.deleteMany({ name: userStatus.name });
      if (userStatus) {
        console.log(userStatus);
        let mailOptions = {
          from: "no-reeply@gmail.com",
          to: userStatus.email,
          subject: "messege send successfully",
          text: `hello ${userStatus.name}, thanks for messaging i will get in touch with you asap `,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.json({ error: "server problem try later", status: 400 });
          }
          console.log(info);
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
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
