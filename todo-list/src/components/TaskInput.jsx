import React from "react";

function TaskInput({ addTask }) {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(input)
    setInput("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Task Input"
        placeholder="Add new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput
