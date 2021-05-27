import { Link } from 'react-router-dom';
import './InventoryItem.css';

export default function InventoryItem({ item, setActiveItem }) {

    return (
        <>
            <td>{item.name}</td>
            <td><img className='ItemImage' src={item.imageURL} /></td>
            <td>{item.description}</td>
            <td style={{color: item.qty < 5 && 'red' }}>{item.qty}</td>
            <td>{item.category.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.cost.toFixed(2)}</td>
            <td>{((1 - item.cost/item.price)*100).toFixed(1)}%</td>
            <td>{item.sku}</td>
            <td><Link to='/items/itemform'><button onClick={() => setActiveItem(item)}>Edit/Delete</button></Link></td>
        </>
    )
}