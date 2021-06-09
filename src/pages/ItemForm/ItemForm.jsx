import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';


export default function ItemForm({ allItems, setAllItems, activeItem, setActiveItem, allCategories }) {

    const history = useHistory();
    const [formInfo, setFormInfo] = useState({
        name: '',
        description: '',
        qty: '',
        category: '',
        price: '',
        cost: '',
        sku: '',
    });

    useEffect(function() {
        if(allCategories[0]) setFormInfo({...formInfo, category: allCategories[0]._id})
    }, [allCategories])
    
    
    function handleChange(evt) {
        if (activeItem) {
            const updatedItem = { ...activeItem, [evt.target.name]: evt.target.value }
            if(updatedItem.price) updatedItem.price = parseFloat(updatedItem.price);
            if(updatedItem.cost) updatedItem.cost = parseFloat(updatedItem.cost);
            if(updatedItem.qty) updatedItem.qty = parseFloat(updatedItem.qty);
            setActiveItem(updatedItem);
        } else {
            const newFormData = { ...formInfo, [evt.target.name]: evt.target.value };
            setFormInfo(newFormData);
        }
    }
    
    async function handleAddItem(evt) {
        evt.preventDefault();
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        formData.append('name', formInfo.name);
        formData.append('description', formInfo.description);
        formData.append('qty', formInfo.qty);
        formData.append('category', formInfo.category);
        formData.append('cost', formInfo.cost);
        formData.append('price', formInfo.price);
        formData.append('sku', formInfo.sku);
        fileField.files.length && formData.append('image', fileField.files[0])
        formData.forEach(ele => console.log(ele))
        const item = await itemsAPI.add(formData);
        setAllItems([...allItems, item]);
        setActiveItem(item)
        setFormInfo({
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
                <input name='name' value={activeItem ? `${activeItem.name}` : `${formInfo.name}`} onChange={handleChange} />
                <label>Description:</label>
                <input name='description' value={activeItem ? `${activeItem.description}` : `${formInfo.description}`} onChange={handleChange} />
                <label>Qty:</label>
                <input name='qty' value={activeItem ? `${activeItem.qty}` : `${formInfo.qty}`} onChange={handleChange} />
                <label>Category:</label>
                <select name='category' onChange={handleChange}>
                    {allCategories.map(cat => 
                        <option value={cat._id}>{cat.name}</option>)}
                </select>
                <label>Cost:</label>
                <input name='cost' value={activeItem ? `${activeItem.cost}` : `${formInfo.cost}`} onChange={handleChange} />
                <label>Price:</label>
                <input name='price' value={activeItem ? `${activeItem.price}` : `${formInfo.price}`} onChange={handleChange} />
                <label>Margin:</label>
                {activeItem ? <span>{((1 - activeItem.cost / activeItem.price) * 100).toFixed(1)}% </span>
                    :
                    formInfo.price ? <span>{((1 - formInfo.cost / formInfo.price) * 100).toFixed(1)}% </span>
                        :
                        <span></span>}
                <label>SKU:</label>
                <input name='sku' value={activeItem ? `${activeItem.sku}` : `${formInfo.sku}`} onChange={handleChange}  />
                <label>Image:</label>
                <input type='file' name='imageURL'/>
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