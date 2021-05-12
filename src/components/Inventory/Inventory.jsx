import { Link } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function Inventroy({ allItems, setAllItems, setActiveItem, selectedSort, setSelectedSort }) {
    
    
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th onClick={() => setSelectedSort('name')}>Name</th>
                    <th>Description</th>
                    <th onClick={() => setSelectedSort('qty')}>Qty</th>
                    <th>Category</th>
                    <th onClick={() => setSelectedSort('price')}>Prices</th>
                    <th>Cost</th>
                    <th>Margin</th>
                    <th>SKU</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {allItems.map((item, idx) => 
                <tr><InventoryItem item={item} key={idx} setActiveItem={setActiveItem} /></tr>)}
            </tbody>
        </table>
        <Link to='/items/itemform'><button onClick={() => setActiveItem(null)}>Add Item</button></Link>
    </div>
    )
}