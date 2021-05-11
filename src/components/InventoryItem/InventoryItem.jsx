import { Link } from 'react-router-dom';

export default function InventoryItem({ item, setActiveItem }) {

    return (
        <>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.qty}</td>
            <td>{item.category.name}</td>
            <td>${item.price}</td>
            <td>${item.cost}</td>
            <td>{((1 - item.cost/item.price)*100).toFixed(1)}%</td>
            <td>{item.sku}</td>
            <td><Link to='/items/itemform'><button onClick={() => setActiveItem(item)}>Edit/Delete</button></Link></td>
        </>
    )
}