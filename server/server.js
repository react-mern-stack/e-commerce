const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const seedProducts = require('./seed/seedProducts');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
seedProducts();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
