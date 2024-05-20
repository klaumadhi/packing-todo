import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "asddf", quantity: 2, packed: true },
];



export default function App() {
  const [items, setItems] = useState(initialItems)

  function handleAddItems(item){

    setItems((items) => [...items, item])
  }

  function handleDeletelItem(id){
    setItems((items => items.filter((item) => item.id !== id)))
  }

  function handleToggleItem(id){
    setItems((items) => items.map(item=> item.id === id ? {...item, packed: !item.packed} : item))

  }


  return (
    <div className="App">
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeletelItem} onToggleItem={handleToggleItem} setItems={setItems}/>
      <Stats items={items}/>
    </div>
  );
}



