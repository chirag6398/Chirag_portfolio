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

const sendMailHandler = (userStatus) => {
  console.log("send mail data", userStatus);
  let mailOptions = {
    from: "no-reeply@gmail.com",
    to: userStatus.email,
    subject: "messege send successfully",
    text: `hello ${userStatus.name}, thanks for messaging i will get in touch with you asap `,
  };
  let mailOptions2 = {
    from: "no-reeply@gmail.com",
    to: "agarwalchirag112@gmail.com",
    subject: "somone message you and visited your portfolio",
    text: ` ${userStatus.name}, has message me ${userstatus.message} `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.json({ error: "server problem try later", status: 400 });
    }
  });

  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      console.log(error);
      return res.json({ error: "server problem try later", status: 400 });
    }
  });
};
router.post("/api/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(401)
        .json({ error: "plz fill all fields", status: 401 });
    } else {
      const newUser = new userModel({ name, email, message });
      const userStatus = await newUser.save();
      await userModel.deleteMany({ name: userStatus.name });

      if (userStatus) {
        sendMailHandler(userStatus);

        return res
          .status(201)
          .json({ message: "message send successfully", status: 201 });
      } else {
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
