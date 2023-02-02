import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <>
      <h3>Todo</h3>

      <button onClick={() => setTodos([...todos, "hey"])}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
