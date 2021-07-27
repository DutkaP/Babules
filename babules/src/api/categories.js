
import {SERVER_URL} from './const';

export const fetchCategories = () =>
  fetch(`${localStorage}/categories`)
    .then(res => res.json())


export const addCategory = (name, description) =>
  fetch(`${SERVER_URL}/new_category`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      description
    }),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json());

export const deleteCategories = (id) => 
  fetch(`${SERVER_URL}/categories`,{
    method : 'DELETE',
    id
   }
  )

  
export const updateCategories = (Categories) => {
    Categories.find()

  }

  