import React, {useState} from 'react';
import {Form, Button, Table}  from 'react-bootstrap'; 

export function CategoryForm ({category}) {
     
     const [name, setName] = useState('')
     const [description, setDescription] = useState('')
     function onSave () {
        console.log(name, description)
        if (name.trim() === '' || description.trim() === '') {
            alert('введіть щось, please')
            return
        }
        
        const prevCategoriesStr = localStorage.getItem('categories')
        const prevCategories = JSON.parse (prevCategoriesStr) ?? []
        //треба перевірити чи в цьому масиві є така сама категорія по назві, якщо є то алерт
        const newCategory = {id:Date.now(),name, description}
        prevCategories.push(newCategory)
        const categoryStr = JSON.stringify(prevCategories) 
        localStorage.setItem('categories', categoryStr)
        if (newCategory === {name, description}) {
            alert('Сорі, така категорія вже є')
            return
        }
     }
    return(
    <>
         <div>{name}</div>
         <Form.Control type='text' onChange={(event)=>{setName(event.target.value)}} placeholder='Назва'></Form.Control>
         <Form.Control type='text' onChange={(event)=>{setDescription(event.target.value)}} placeholder='Опис'></Form.Control>
         <Button onClick={()=>onSave()}>Додати категорію</Button>

     </>
     )
 }
 