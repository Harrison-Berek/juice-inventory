import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function Inventroy({ allItems, setActiveItem, selectedSort, setSelectedSort }) {
    
    return (
    <div> 
    <div className='flex-ctr-ctr'>
        <table>
            <thead>
                <tr>
                    <th onClick={() => setSelectedSort('name')} style={{textDecoration: selectedSort === 'name' && 'underline'}}>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th onClick={() => setSelectedSort('qty')}style={{textDecoration: selectedSort === 'qty' && 'underline'}}>Qty</th>
                    <th>Category</th>
                    <th onClick={() => setSelectedSort('price')} style={{textDecoration: selectedSort === 'price' && 'underline'}}>Prices</th>
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
    </div>
        <Link to='/items/itemform'><button onClick={() => setActiveItem(null)}>Add Item</button></Link>
    </div>
    )
}