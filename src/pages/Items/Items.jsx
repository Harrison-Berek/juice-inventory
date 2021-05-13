import Inventory from '../../components/Inventory/Inventory';

export default function Items({ allItems, setActiveItem, selectedSort, setSelectedSort }) {

  return (
  <div>
    <h1>Items</h1>
    <Inventory allItems={allItems} setActiveItem={setActiveItem} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
  </div>
  )
}