export default function InventoryItem({ item }) {
    return (
        <>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.cost}</td>
            <td>{((1 - item.cost/item.price)*100).toFixed(1)}%</td>
            <td>{item.sku}</td>
            <td><button>Edit/Delete</button></td>
        </>
    )
}