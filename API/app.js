const express = require('express');

const { PrismaClient } = require('@prisma/client');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const patienRoute = require("./routes/patienRoute");

app.use(
  "/api/",
  patienRoute,
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});