import Inventory from '../../components/Inventory/Inventory';

export default function Items({ allItems, setActiveItem }) {

  return (
  <div>
    <h1>Items</h1>
    <Inventory allItems={allItems} setActiveItem={setActiveItem} />
  </div>
  )
}