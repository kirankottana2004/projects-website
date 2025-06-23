const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const connection = require("./database");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/send-email", (req, res) => {
  const { name, email, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Email error:", err);
      return res.status(500).json({ message: "Failed to send email", error: err.message });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});


// Register API
app.post('/register', async (req, res) => {
  const { first_name, last_name, email, phone, company, password } = req.body;

  if (!first_name || !last_name || !email || !phone || !password) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO react_users (first_name, last_name, email, phone, company, password)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(
      query,
      [first_name, last_name, email, phone, company || '', hashedPassword],
      (err, results) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Email already registered.' });
          }
          return res.status(500).json({ message: 'Database error.' });
        }

        res.status(200).json({ message: 'Registration successful!' });
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
