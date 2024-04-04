import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);
  let nextId = 0;

  function handleChange(e) {
    setText(e.target.value);
  }

  function addItem() {
    setAdd([
      ...add,
      {
        text: text,
        id: nextId++,
      },
    ]);
  }

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={addItem}> Add </button>
      </div>
      <ul>
        {add.map((item) => (
          <>
            <li key={item.id}>{item.text}</li>
            <button>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}
