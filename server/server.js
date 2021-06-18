const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const { Db } = require('mongodb');
const Category = require('./models/modelCategories')



async function start() {
try {
  await mongoose.connect('mongodb://localhost:27017/Test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
 } catch(e){
    console.log(e)
 }

} 

app.use(express.json())
app.use(cors(cors.params))
app.use(bodyParser.json());

app.get('/categories', (req, res) => {
  Category.find().then((categories) => {
    res.json(categories)
  })
})


app.post('/new_category', (req, res) => {
  console.log(req.body.name);
  const newCategory = new Category({name:req.body.name})
  newCategory.save().then(() => { 
      console.log(newCategory)
    res.json(newCategory)
    res.send()
  });
})

app.put('/category',(req,res) => {
  
})

app.delete('/categories/:id') 
const deleteOneByID = async (req, res) => {
  const _id = req.params.id
  try {
   const categoryDelete = await Category.findByIdAndDelete(_id);
   res.status(200).json(categoryDelete);
  } catch (err) {
   res.status(500).json({
    message: err.message,
   });
  }
 }

start()
  app.listen(8080, 
  console.log(`server is running`)
  )