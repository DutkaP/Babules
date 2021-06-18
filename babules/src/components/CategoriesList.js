import React, { useState, useEffect } from "react";
import {Table,Button,Form} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { AddCategoryForm } from "./AddCategoryForm";


function CategoriesList({categories,description,onRemove}) {
  
  return !categories,description?.length ? (
    <p>No categories</p>
  ) : (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"></link>
    <Form.Control type='text' placeholder='Введіть перші літери назви категорії'></Form.Control>
    <br/>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Назва</th>
      <th>Опис</th>
      <th>Управління</th>
    </tr>
  </thead>
  <tbody>
  {categories.map((category) => (
     <tr>
        <td>{category.name}</td>
        <td>{category.description}</td>
         <NavLink
           to ={`/editcategory/${category.id}`}>
         <Button type="button" variant="outline-secondary"><i className="fas fa-edit"></i></Button>
         </NavLink>
        <Button type="button" variant="outline-danger" onClick={() => onRemove(category.id)}><i className="fa fa-trash"></i></Button>{''}   
     </tr>
   ))}
</tbody>
</Table>
     </>
     
    );   
}

export default CategoriesList;
