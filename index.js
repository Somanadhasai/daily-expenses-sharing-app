const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 
const expenseRoutes = require('./routes/expenseRoutes'); 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
