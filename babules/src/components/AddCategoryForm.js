import React, { useState } from 'react';
import { addCategory } from '../api/categories';
import { Button,Form } from 'react-bootstrap';



function AddCategoryForm() {
  const [name, setName] = useState('');
  function onSave() {
  console.log(name)
    addCategory(name)
      .catch((e) => {
        console.error(e)
        alert("ERROR")
      })
  }

  return (
  <>
   <Form.Control size="bg" type="text"  onChange={event => setName(event.target.value)}placeholder="Введіть назву категорії" />
  
   <Button variant="dark" onClick={onSave}>Add</Button>{''}
  </>

  )
}

export default AddCategoryForm;