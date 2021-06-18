import React, {  useState,useEffect } from 'react'
import { fetchCategories } from '../api/categories'
import CategoriesList from '../components/CategoriesList'

export const Categories = () => {
  const [categoriesState, setCategories] = useState([])
    
  function onRemove(id) {
   const newCategories = categoriesState.filter((category) => category.id !== id);
   setCategories(newCategories)
   localStorage.setItem('categories', JSON.stringify(newCategories))
  }
  useEffect(()=> {
    fetchCategories().then((categories) => {
      setCategories(categories)
    })
  },
  [])

  return (
      <CategoriesList 
        categories={categoriesState} 
        onRemove={onRemove}
      /> 
  )
}
