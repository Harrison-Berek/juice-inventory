import Inventory from '../../components/Inventory/Inventory';
import './Items.css';

export default function Items({ allItems, setActiveItem, selectedSort, setSelectedSort }) {

  return (
  <div className='items-table'>
    <h1>Items</h1>
    <Inventory allItems={allItems} setActiveItem={setActiveItem} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
  </div>
  )
}