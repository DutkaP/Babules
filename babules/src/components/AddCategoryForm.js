import React, { useState } from 'react';
import { addCategory } from '../api/categories';
import { Button,Form } from 'react-bootstrap';


function AddCategoryForm({addCategory: addCategoryClient}) {
  const [name, setName] = useState('');
  function onSave() {
    addCategory(name)
      .then((id) => {
        addCategoryClient({
          id,
          name
        });
      })
      .catch((e) => {
        console.error(e)
        alert("ERROR")
      })
  }

  return (
  <>
   <Form.Control size="lg" type="text" value={name} onChange={e => setName(e.target.value)}placeholder="Введіть назву категорії" />
   <br/>
   <Button variant="dark" onClick={onSave}>Add</Button>{' '}
  </>

  )
}

export default AddCategoryForm;