import { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import ClearButton from './components/ClearButton';

function getLocalItems(){
  let list = localStorage.getItem('listItems')
  if (list) return JSON.parse(list)
  else return [];
}

export default function App() {

  const [items, setItems] = useState(getLocalItems());

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(task) {
    setItems((items) => items.filter(item => item.task !== task))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list')
    if (confirmed) setItems([]);
  }

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  },[items])  

  return (
    <main className="flex flex-col items-center overscroll-none overflow-y-visible">
      <h1 className="text-white font-bold text-3xl p-5 text-center md:text-5xl md:p-10">
        To-Do List
      </h1>
      <Form onAddItems={handleAddItem} className=""></Form>
      <List items={items} onDeleteItems={handleRemoveItem}></List>
      <div>
        {items.length !== 0 &&
            <ClearButton onClearList={handleClearList}></ClearButton>
        }
      </div>
    </main>
  );
}
//rafc