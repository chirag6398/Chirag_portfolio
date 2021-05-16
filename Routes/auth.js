const express = require("express");
const router = express.Router();
const userModel = require("../model/userSchema");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_KEY,
    },
  })
);
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
      if (userExist) {
        console.log("user Exist");
        return res.status(401).json({ message: "user exist", status: 401 });
      } else {
        const newUser = new userModel({ name, email, message });
        const userStatus = await newUser.save();

        if (userStatus) {
          transporter.sendMail({
            to: userStatus.email,
            from: "no-reply@contact.com",
            subject: "message send successfully",
            html: "<h3>Thanks for messaging you will get reply very soon</h3>",
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
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
