import React, { Fragment, useState, useEffect } from 'react'
import CategoriesList from '../components/CategoriesList'

export const Categories = () => {
  const categoriesStr = localStorage.getItem('categories')
  const categories = JSON.parse(categoriesStr)
  const [categoriesState, setCategories] = useState(categories ?? [])
    
    function onRemove(id) {
      const newCategories = categoriesState.filter((category) => category.id !== id);
      
       setCategories(newCategories)

       localStorage.setItem('categories', JSON.stringify(newCategories))
   }

   
  return (

      <CategoriesList categories={categoriesState} 
      onRemove={onRemove}
      />
      
  )
  
}
