require("dotenv").config()

const nodemailer = require('nodemailer');

//Step 1
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.PASSWORD,
        pass: process.env.EMAIL
    }
});

//Step 2
let mailOptions = {
    from: "crystalwatkins428@gmail.com",
    to: "ccopeland900@gmail.com",
    subject: "Testing out Nodemailer",
    text: "it works"
};

//Step 3
transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log("Error")
    }else {
        console.log("Email sent!")
    }
});