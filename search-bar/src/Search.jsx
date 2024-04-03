import { useState } from "react";
import { foods } from "./data";

export default function Search() {
  const [text, setText] = useState("");

  const foodie = foods.filter((food) =>
    food.name.toLowerCase().includes(text.toLowerCase()),
  );

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h2> Search Bar </h2>
      <input type="text" value={text} onChange={handleChange} />
      <table>
        <tbody>
          {foodie.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
