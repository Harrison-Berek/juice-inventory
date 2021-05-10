import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function Inventroy({ allItems }) {

    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Cost</th>
                    <th>Margin</th>
                    <th>SKU</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {allItems.map((item, idx) => 
                <tr><InventoryItem item={item} key={idx}/></tr>)}
            </tbody>
        </table>
        <Link to='/items/itemform'><button>Add Item</button></Link>
    </div>
    )
}