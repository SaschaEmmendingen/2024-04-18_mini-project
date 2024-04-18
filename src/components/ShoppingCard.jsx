import { useState, useEffect } from "react";

const ShoppingCard = () => {
  const [items, setItems] = useState([]);

  const [itemsText, setItemsText] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (itemsText.trim() !== "") {
      setItems([...items, itemsText]);
      setItemsText("");
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Shopping Card</h2>
      <input
        type="text"
        value={itemsText}
        onChange={(e) => setItemsText(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCard;
