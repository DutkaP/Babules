import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Categories} from './pages/Categories'
import {Activities} from './pages/Activities'
import {Help} from './pages/Help'
import {Navbar} from './components/Navbar'
import {AddCategory} from './pages/AddCategory'
import { EditCategory } from './pages/EditCategory'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
     <Switch>
      <Route path={'/'} exact component={Categories}/>
      <Route path={'/activities'} exact component={Activities}/>
      <Route path={'/help'} exact component={Help}/>
      <Route path={'/addcategory'} exact component={AddCategory}/>
      <Route path={'/editcategory/:id'} exact component={EditCategory}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
