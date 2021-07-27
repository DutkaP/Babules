const mongoose = require('mongoose');

const Category = mongoose.model('Categories', { 
    description: String,
    name: String, 
    reg_time: {type: Date, default: Date.now}
});

module.exports = Category;




/*const category = new Category({ name: 'Activities' });
category.save().then(() => console.log('something'));*/