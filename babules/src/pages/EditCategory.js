import React from 'react'
import { useLocation } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

    export function EditCategory() {
    
        const location = useLocation()
        const pathParts = location.pathname.split('/')
        const id = pathParts[pathParts.length-1]
        //const prevCategoriesStr = localStorage.getItem('categories')
        //const prevCategories = JSON.parse (prevCategoriesStr) ?? []
        const prevNameStr = localStorage.getItem('categories')
        const prevDescriptionStr = localStorage.getItem('categories')
        const prevName = JSON.parse(prevNameStr)
        const prevDescription = JSON.parse(prevDescriptionStr)    
        const categories = JSON.parse(localStorage.getItem('categories'));
        const {name, description}  = categories.find(category => 'name')
          
        return (
        <>
        <Form.Control type='text' value={name}/>                            
        <Form.Control type='text' value={description}/>
        <Button>Зберегти</Button> 
        </> 

        )
    }
    export default EditCategory