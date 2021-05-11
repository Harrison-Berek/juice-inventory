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



    async function addItem(itemData) {
        const item = await itemsAPI.add(itemData);
        setAllItems([...allItems, item]);
        setActiveItem(item)
        history.push('/items');
    }

    async function updateItem(updatedItem) {
        const item = await itemsAPI.update(updatedItem);
        setActiveItem(item);
        history.push('/items');
    }

    async function deleteItem(deletedItem) {
        const item = await itemsAPI.deleteItem(deletedItem);
        setActiveItem(null);
        history.push('/items');
    }

    
    function handleChange(evt) {
        if (activeItem) {
            const updatedItem = { ...activeItem, [evt.target.name]: evt.target.value }
            if(updatedItem.price) updatedItem.price = parseInt(updatedItem.price);
            if(updatedItem.cost) updatedItem.cost = parseInt(updatedItem.cost);
            if(updatedItem.qty) updatedItem.qty = parseInt(updatedItem.qty);
            setActiveItem(updatedItem);
        } else {
            const newFormData = { ...formData, [evt.target.name]: evt.target.value };
            setFormData(newFormData);
        }
    }

    function handleAddItem(evt) {
        evt.preventDefault();
        addItem(formData);
        setFormData({
            name: '',
            description: '',
            qty:'',
            category: allCategories[0]._id,
            price: '',
            cost: '',
            sku: '',
        });
    }

    function handleUpdateItem(evt) {
        evt.preventDefault();
        updateItem(activeItem);
    }

    function handleDeleteItem(evt) {
        evt.preventDefault();
        deleteItem(activeItem);
        console.log('clicked');
    }

    return (
        <>
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
        </>
    )
}