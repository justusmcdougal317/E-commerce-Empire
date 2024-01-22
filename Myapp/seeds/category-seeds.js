const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = async () => {
  try {
    // Use bulkCreate to insert multiple records at once
    await Category.bulkCreate(categoryData);

    console.log('Categories seeded successfully');
  } catch (err) {
    console.error('Error seeding categories:', err);
  }
};

// Invoke the seedCategories function
seedCategories();