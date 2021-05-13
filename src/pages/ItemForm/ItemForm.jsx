import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';


export default function ItemForm({ allItems, setAllItems, activeItem, setActiveItem, allCategories }) {

    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        qty: '',
        category: '',
        price: '',
        cost: '',
        sku: '',
    });

    useEffect(function() {
        if(allCategories[0]) setFormData({...formData, category: allCategories[0]._id})
    }, [allCategories])
    
    
    function handleChange(evt) {
        if (activeItem) {
            const updatedItem = { ...activeItem, [evt.target.name]: evt.target.value }
            if(updatedItem.price) updatedItem.price = parseFloat(updatedItem.price);
            if(updatedItem.cost) updatedItem.cost = parseFloat(updatedItem.cost);
            if(updatedItem.qty) updatedItem.qty = parseFloat(updatedItem.qty);
            setActiveItem(updatedItem);
        } else {
            const newFormData = { ...formData, [evt.target.name]: evt.target.value };
            setFormData(newFormData);
        }
    }
    
    async function handleAddItem(evt) {
        evt.preventDefault();
        const item = await itemsAPI.add(formData);
        setAllItems([...allItems, item]);
        setActiveItem(item)
        setFormData({
            name: '',
            description: '',
            qty:'',
            category: allCategories[0]._id,
            price: '',
            cost: '',
            sku: '',
        });
        history.push('/items');
    }
    
    async function handleUpdateItem(evt) {
        evt.preventDefault();
        const item = await itemsAPI.update(activeItem);
        setActiveItem(item);
        history.push('/items');
    }

    
    async function handleDeleteItem(evt) {
        evt.preventDefault();
        await itemsAPI.deleteItem(activeItem);
        setActiveItem(null);
        history.push('/items');
    }

    return (
        <div style={{margin: '8vmin'}}>
            <h1>{activeItem ? 'Edit Item' : 'Add an Item'}</h1>
            <form>
                <label>Name:</label>
                <input name='name' value={activeItem ? `${activeItem.name}` : `${formData.name}`} onChange={handleChange} />
                <label>Description:</label>
                <input name='description' value={activeItem ? `${activeItem.description}` : `${formData.description}`} onChange={handleChange} />
                <label>Qty:</label>
                <input name='qty' value={activeItem ? `${activeItem.qty}` : `${formData.qty}`} onChange={handleChange} />
                <label>Category:</label>
                <select name='category' onChange={handleChange}>
                    {allCategories.map(cat => 
                        <option value={cat._id}>{cat.name}</option>)}
                </select>
                <label>Cost:</label>
                <input name='cost' value={activeItem ? `${activeItem.cost}` : `${formData.cost}`} onChange={handleChange} />
                <label>Price:</label>
                <input name='price' value={activeItem ? `${activeItem.price}` : `${formData.price}`} onChange={handleChange} />
                <label>Margin:</label>
                {activeItem ? <span>{((1 - activeItem.cost / activeItem.price) * 100).toFixed(1)}% </span>
                    :
                    formData.price ? <span>{((1 - formData.cost / formData.price) * 100).toFixed(1)}% </span>
                        :
                        <span></span>}
                <label>SKU:</label>
                <input name='sku' value={activeItem ? `${activeItem.sku}` : `${formData.sku}`} onChange={handleChange}  />
                <div></div>
                <div>
                {activeItem ?
                    <button onClick={handleUpdateItem}>Edit</button>
                    :
                    <button onClick={handleAddItem} >Add Item</button>}
                {activeItem ?
                    <button onClick={handleDeleteItem}>Delete</button>
                    :
                    <></>}
                    </div>
            </form>
        </div>
    )
}