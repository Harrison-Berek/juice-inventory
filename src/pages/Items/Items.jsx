import Inventory from '../../components/Inventory/Inventory';

export default function Items({ allItems }) {
  
  console.log(allItems);

  return (
  <div>
    <h1>Items</h1>
    <Inventory allItems={allItems} />
  </div>
  )
}