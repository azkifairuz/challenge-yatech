const express = require('express');

   const { PrismaClient } = require('@prisma/client');

   const app = express();

   const prisma = new PrismaClient();

   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {

     console.log(`Server is running on port ${PORT}`);

   });