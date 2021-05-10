import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import Inventory from '../../components/Inventory/Inventory';

export default function Items() {
  const [allItems, setAllItems] = useState([])

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setAllItems(items);
    };
    getItems();
  }, []);

  console.log(allItems);
  console.log('Hi');


  return (
  <div>
    <h1>Items</h1>
    <Inventory allItems={allItems} />
  </div>
  )
}