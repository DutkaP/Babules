import {SERVER_URL} from './const';

export const fetchCategories = () =>
  fetch(`${SERVER_URL}/categories`)
    .then(res => res.json())


export const addCategory = (name) =>
  fetch(`${SERVER_URL}/new_category`, {
    method: 'POST',
    body: {
      name
    }
  })
  .then(res => res.json());