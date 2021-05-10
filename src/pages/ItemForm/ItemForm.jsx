import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';

 
export  default function ItemForm({ allItems, setAllItems, activeItem }) {
    console.log(activeItem);

    const history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        cost: '',
        sku: '',
    });
    
    async function addItem(itemData){
        const item = await itemsAPI.add(itemData);
        setAllItems([...allItems, item]);
        history.push('/items');
    }

    function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
    }
    
    function handleAddItem(evt) {
    evt.preventDefault();
    addItem(formData);
    setFormData({
        name: '',
        description: '',
        price: '',
        cost: '',
        sku: '',
    });
    }

    return (
        <>
            <h1>Add an Item</h1>
            <form onSubmit={handleAddItem} >
                <label>Name:</label>
                <input name='name' value={formData.name} onChange={handleChange} />
                <label>Description:</label>
                <input name='description' value={formData.description} onChange={handleChange} />
                <label>Cost:</label>
                <input name='cost' value={formData.cost} onChange={handleChange} />
                <label>Price:</label>
                <input name='price' value={formData.price} onChange={handleChange} />
                <label>Margin:</label>
                {formData.price ? <span>{((1 - formData.cost/formData.price)*100).toFixed(1)}% </span>
                :
                <span></span>}
                <label>SKU:</label>
                <input name='sku' value={formData.sku} onChange={handleChange} />
                <button type='submit'>Add Item</button>
            </form>
        </>
    )
}