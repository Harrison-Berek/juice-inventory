import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';


export default function ItemForm({ allItems, setAllItems, activeItem, setActiveItem }) {
    console.log(activeItem);

    const history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        cost: '',
        sku: '',
    });



    async function addItem(itemData) {
        const item = await itemsAPI.add(itemData);
        setAllItems([...allItems, item]);
        history.push('/items');
    }

    async function updateItem(newItem) {

    }

    function handleChange(evt) {
        if (activeItem) {
            const updatedItem = { ...activeItem, [evt.target.name]: evt.target.value }
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
            price: '',
            cost: '',
            sku: '',
        });
    }

    function handleUpdateItem(evt) {
        evt.preventDefault();
        console.log(activeItem);
        console.log('clicked');
    }

    function handleDeleteItem(evt) {
        evt.preventDefault();
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
                <label>Cost:</label>
                <input name='cost' value={activeItem ? `${activeItem.cost}` : `${formData.cost}`} onChange={handleChange} />
                <label>Price:</label>
                <input name='price' value={activeItem ? `${activeItem.price}` : `${formData.price}`} onChange={handleChange} />
                <label>Margin:</label>
                {activeItem.price ? <span>{((1 - activeItem.cost / activeItem.price) * 100).toFixed(1)}% </span>
                    :
                    formData.price ? <span>{((1 - formData.cost / formData.price) * 100).toFixed(1)}% </span>
                        :
                        <span></span>}
                <label>SKU:</label>
                <input name='sku' value={activeItem ? `${activeItem.sku}` : `${formData.sku}`} onChange={handleChange}  />
                {activeItem ?
                    <button onClick={handleUpdateItem}>Edit</button>
                    :
                    <button type='submit' onClick={handleAddItem} >Add Item</button>}
                {activeItem ?
                    <button onClick={handleDeleteItem}>Delete</button>
                    :
                    <></>}
            </form>
        </>
    )
}