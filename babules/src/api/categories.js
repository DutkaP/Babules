import { Categories } from '../pages/Categories';

import {SERVER_URL} from './const';

export const fetchCategories = () =>
  fetch(`${SERVER_URL}/categories`)
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
  
export const updateCategories = (Categories) => {
    Categories.find()

  }

  