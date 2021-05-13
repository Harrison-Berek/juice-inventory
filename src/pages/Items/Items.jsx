import Inventory from '../../components/Inventory/Inventory';

export default function Items({ allItems, setActiveItem, setSelectedSort }) {

  return (
  <div>
    <h1>Items</h1>
    <Inventory allItems={allItems} setActiveItem={setActiveItem} setSelectedSort={setSelectedSort} />
  </div>
  )
}