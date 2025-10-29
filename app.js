const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Đăng ký các route
const contactsRouter = require("./app/routes/contact.route");
app.use("/api/contacts", contactsRouter);

module.exports = app;