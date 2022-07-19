const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Required Routes
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API Server open on port ${PORT}.`);
});