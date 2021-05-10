import { useState } from 'react';

 
export  default function ItemForm({ allItems, setAllItems }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        cost: '',
        sku: '',
    });
    
    function addItem(item){
        setAllItems([...allItems, item])
    }

    function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    console.log(newFormData);
    setFormData(newFormData);
    }
    
    function handleAddItem(evt) {
    evt.preventDefault();
    console.log(formData);
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
                <label>Price:</label>
                <input name='price' value={formData.price} onChange={handleChange} />
                <label>Cost:</label>
                <input name='cost' value={formData.cost} onChange={handleChange} />
                <label>Margin:</label>
                Margin
                <label>SKU:</label>
                <input name='sku' value={formData.sku} onChange={handleChange} />
                <button type='submit'>Add Item</button>
            </form>
        </>
    )
}