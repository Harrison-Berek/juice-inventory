import { useState } from 'react';
import CategoryItem from '../../components/Category/CategoryItem';

export default function Categories({ allItems, allCategories, setActiveItem }) {
const [activeCategory, setActiveCategory] = useState('Wine')

  return (
    <div>
      <h1>Categories</h1>
      {allCategories.map((cat, idx) => 
        <button onClick={() => setActiveCategory(cat.name)}>{cat.name}</button>)}
      <div className='flex-ctr-ctr'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Category</th>
                    <th>Prices</th>
                    <th>Cost</th>
                    <th>Margin</th>
                    <th>SKU</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {allItems.filter((item, idx) => item.category.name === activeCategory).map((item, idx) =>
                  <tr><CategoryItem item={item} key={idx} setActiveItem={setActiveItem} /></tr>)}
            </tbody>
        </table>
      </div>
    </div>
    )
}