const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', expenseRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:5000`);
});