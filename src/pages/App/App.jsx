import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api';
import AuthPage from '../AuthPage/AuthPage';
import Items from '../Items/Items';
import Categories from '../Categories/Categories';
import Venders from '../Venders/Venders';
import NavBar from '../../components/NavBar/NavBar';
import ItemForm from '../ItemForm/ItemForm';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allItems, setAllItems] = useState([])
  const [activeItem, setActiveItem] = useState(null)


  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setAllItems(items);
    };
    getItems();
  }, []);
  
  return (
    <main className="App">
      { 
      user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/items/itemform">
              <ItemForm allItems={allItems} setAllItems={setAllItems} activeItem={activeItem} setActiveItem={setActiveItem} />
            </Route>
            <Route path="/items">
              <Items allItems={allItems} setActiveItem={setActiveItem} />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/venders">
              <Venders />
            </Route>
            <Redirect to="/items" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
