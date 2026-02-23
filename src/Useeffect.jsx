import { useEffect, useState } from "react";

export default function Useeffect() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("Called at Mount");
  }, []);

  
  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
