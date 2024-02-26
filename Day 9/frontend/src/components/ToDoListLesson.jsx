import { useState } from "react";

const ToDoListLesson = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    setTodos([...todos, value]);
    setValue("");
  };

  const handleAddTask = (e) => {
    setValue(e.target.value);
  };

  const saveTask = (index) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = editValue;
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditValue("");
    }
  };

  const deleteTask = (e) => {
    const updatedTodos = todos.filter((item, i) => i !== e);
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  return (
    <>
      <div className="programmingLanguageContainer">
        <>
          <input
            type="text"
            value={value}
            pattern="[A-Za-z]{1,32}"
            onChange={(e) => handleAddTask(e)}
          />
          <button onClick={addTask}>Add task</button>
        </>
      </div>
      <div className="programmingLanguageContainer">
        {todos.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.15rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt=""
                style={{ width: "12px", height: "12px" }}
              />
              {editIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.25rem",
                alignItems: "center",
              }}
            >
              {editIndex === index ? (
                <button onClick={() => saveTask(index)}>Save</button>
              ) : (
                <>
                  <button onClick={() => setEditIndex(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoListLesson;
