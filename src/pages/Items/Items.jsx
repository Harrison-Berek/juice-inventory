import Inventory from '../../components/Inventory/Inventory';

export default function Items({ allItems, setAllItems, setActiveItem, selectedSort, setSelectedSort }) {

  return (
  <div>
    <h1>Items</h1>
    <Inventory allItems={allItems} setAllItems={setAllItems} setActiveItem={setActiveItem} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
  </div>
  )
}