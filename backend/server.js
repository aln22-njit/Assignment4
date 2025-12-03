const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 4200;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});