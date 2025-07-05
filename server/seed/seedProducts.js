const Product = require('../models/Product');

const seedProducts = async () => {
  try {
    await Product.deleteMany();

    const products = [
      {
        name: "Striped Flutter Sleeve Overlap collar",
        type: 'Women',
        description: 'Comfortable and stylish casual T-shirt for men',
        price: 350,
        image: '/images/product_1.png',
      },
      {
        name: 'Striped Flutter Sleeve Overlap collar',
        type: 'Kids',
        description: 'Comfortable and stylish casual T-shirt',
        price: 2500,
        image: '/images/product_2.png',
      },
      {
        name: "Striped Flutter Sleeve Overlap collar",
        type: 'Kids',
        description: 'Comfortable and stylish casual T-shirt',
        price: 450,
        image: '/images/product_4.png',
      },
      {
        name: 'Striped Flutter Sleeve Overlap collar',
        type: 'Not Applicable',
        description: 'Comfortable and stylish casual T-shirt',
        price: 1200,
        image: '/images/product_5.png',
      },
      {
        name: 'Striped Flutter Sleeve Overlap collar',
        type: 'Women',
        description: 'Comfortable and stylish casual T-shirt.',
        price: 5000,
        image: '/images/product_27.png',
      },
      {
        name: 'Striped Flutter Sleeve Overlap collar',
        type: 'Men',
        description: 'Comfortable and stylish casual T-shirt',
        price: 800,
        image: '/images/product_10.png',
      },
      {
        name: 'Striped Flutter Sleeve Overlap collar',
        type: 'Kids',
        description: 'Comfortable and stylish casual T-shirt',
        price: 250,
        image: '/images/product_9.png',
      },
      {
        name: 'Striped Flutter Sleeve Overlap collar',
        type: 'Kids',
        description: 'Comfortable and stylish casual T-shirt',
        price: 700,
        image: '/images/product_28.png',
      },
    ];

    await Product.insertMany(products);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Seeding error:', err.message);
  }
};

module.exports = seedProducts;
