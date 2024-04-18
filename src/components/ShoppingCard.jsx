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
    <div className="card">
      <h2>Shopping Card</h2>
      <input
        type="text"
        value={itemsText}
        className="inputField"
        onChange={(e) => setItemsText(e.target.value)}
      />
      <button className="addBtn" onClick={addItem}>
        Add Item
      </button>
      <ul className="list">
        {items.map((item, index) => (
          <li className="items" key={index}>
            {item}
            <button className="removeBtn" onClick={() => removeItem(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCard;
