const mongoose = require('mongoose');

const Category = mongoose.model('Categories', { name: String });

module.exports = Category;




/*const category = new Category({ name: 'Activities' });
category.save().then(() => console.log('something'));*/