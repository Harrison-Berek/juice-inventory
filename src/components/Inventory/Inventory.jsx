import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function Inventroy({ allItems, setActiveItem }) {

    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
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