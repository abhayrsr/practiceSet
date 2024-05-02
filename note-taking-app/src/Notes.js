import { React, useState } from "react";

export default function Notes() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  function save() {
    if (noteText.trim()) {
      setNotes([...notes, noteText]);
      setNoteText(" ");
      console.log(notes);
    } else {
      alert("empty notes can't be saved");
    }
  }

  return (
    <div>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        row="4"
        col="2"
      />
      <br></br>
      <button onClick={save}>save</button>
      <br></br>
      <ul>
        {notes.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
