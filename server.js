const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/updateddata', express.static(path.join(__dirname, 'updateddata')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
