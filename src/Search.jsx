import { useState } from "react";
export default function Search() {
  const [find, setFind] = useState("");

  const names = ["Laptop", "Mobile", "Earbuds", "Iron"];
  const students = names.filter((name) =>
    name.toLowerCase().includes(find.toLowerCase())
  );

  return (
    <>
      <h2>search</h2>
      <input
        type="text"
        placeholder='Enter key to search'
        value={find}
        onChange={(e)=>setFind(e.target.value)}/>
        <ul>
            {students.map((item,index)=>(<li key={index}>{item}</li>
            ))}
        </ul>
    </>
  );
}
