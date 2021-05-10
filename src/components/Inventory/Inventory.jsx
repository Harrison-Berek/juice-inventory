import { useHistory } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function Inventroy({ allItems }) {
    const history = useHistory();

    function handleAddItem() {
        console.log('clicked');
        history.push('/itemform');
    }

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
                    <th>Category</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {allItems.map((item, idx) => 
                <tr><InventoryItem item={item} key={idx}/></tr>)}
            </tbody>
        </table>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
    )
}