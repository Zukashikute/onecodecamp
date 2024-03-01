// import { useState } from "react";:
// This line imports the useState hook
// from the React library. The useState
// hook is a function that returns an
// array with two elements: the current
// state value and a function to update
// that value.

// The useState hook is typically used
// inside functional components in
// React to add state to them. It helps
// manage stateful logic in a more
// concise and readable way compared to
// traditional class components.

import { useState } from "react";

const ToDoListLesson = () => {
  // const [todos, setTodos] = useState([]);
  // This line declares a state variable
  // called todos using the useState
  // hook. It initializes todos as an
  // empty array, and setTodos is a
  // function that will be used to
  // update the value of todos. The
  // useState hook returns an array
  // where the first element is the
  // current state (todos in this case),
  // and the second element is a
  // function to update that state
  // (setTodos in this case).

  // const [value, setValue] = useState("");
  // This line declares a state variable
  // called value and initializes it
  // with an empty string. The setValue
  // function will be used to update the
  // value of value. This is commonly
  // used for input fields or any other
  // piece of data that needs to be
  // stored in the component's state.

  // const [editValue, setEditValue] = useState("");
  // Similar to the second line, this
  // declares a state variable editValue
  // and initializes it with an empty
  // string. The setEditValue function
  // will be used to update the value of
  // editValue. This is likely used for
  // storing the value of an input field
  // when the user is editing an
  // existing todo item.

  // const [editIndex, setEditIndex] = useState(null);
  // This line declares a state variable
  // editIndex and initializes it with
  // null. The setEditIndex function
  // will be used to update the value of
  // editIndex. This variable is
  // probably used to keep track of the
  // index of the todo item that is
  // currently being edited. The initial
  // value of null may indicate that no
  // item is being edited when the
  // component initially mounts.

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  //  setTodos([...todos, value]);: This
  // line updates the todos state using
  // the setTodos function. It creates a
  // new array by spreading the existing
  // tasks (todos) and adds the current
  // value (value) to the end of the
  // array. This is a common pattern in
  // React when updating an array state
  // without directly modifying the
  // existing state.

  // setValue("");: After adding the task
  // to the todos array, this line sets
  // the value state to an empty string.
  // This is typically done to clear the
  // input field or reset it for the next
  // task to be added.
  const addTask = () => {
    setTodos([...todos, value]);
    setValue("");
  };

  // setValue(e.target.value);: This line
  // updates the value state using the
  // setValue function. It sets the value
  // state to the current value of the
  // input field, which is accessed
  // through the e.target.value property.
  const handleAddTask = (e) => {
    setValue(e.target.value);
  };

  // if (editIndex !== null) {: This
  //   line checks whether there is an
  //   editIndex that is not null,
  //   indicating that a task is being
  //   edited. If there is no task being
  //   edited, the function does nothing.

  // 1. Check if there is an editIndex indicating that a task is being edited.

  //   const updatedTodos = [...todos];:
  //   This line creates a copy of the
  //   todos array using the spread
  //   operator ([...todos]). This is a
  //   common pattern in React to ensure
  //   immutability when updating state
  //   variables.

  // 2. Create a copy of the todos array.

  //  updatedTodos[index] = editValue;:
  // This line updates the task at the
  // specified index in the copied array
  // (updatedTodos) with the value of
  // the task being edited (editValue).

  // 3. Update the task at the specified index with the edited value.

  // setTodos(updatedTodos);: After
  // updating the array, this line sets
  // the todos state with the updated
  // array, effectively updating the
  // list of tasks.

  // 4. Set the todos state with the updated array.

  // setEditIndex(null);: This line
  // resets the editIndex state to null,
  // indicating that no task is
  // currently being edited.

  // setEditValue("");: This line resets
  // the editValue state to an empty
  // string, clearing any previous
  // edited value.

  // 4. Reset the editIndex and editValue states.

  const saveTask = (index) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = editValue;
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditValue("");
    }
  };

  //   const updatedTodos =
  // todos.filter((item, i) => i !==
  // e);: This line creates a new array
  // (updatedTodos) by using the filter
  // method on the todos array. It
  // filters out the task at the
  // specified index (e) by only
  // including tasks where the index (i)
  // is not equal to e.

  // 1. Create a new array excluding the task at the specified index.

  // setTodos(updatedTodos);: After
  // creating the updated array without
  // the deleted task, this line sets
  // the todos state with the updated
  // array, effectively removing the
  // specified task from the list.

  // 2. Set the todos state with the updated array.

  // setEditIndex(null);: This line
  // resets the editIndex state to null,
  // indicating that no task is
  // currently being edited. This
  // ensures that if a task is being
  // edited and then deleted, the
  // component reflects that no task is
  // in the editing state.

  // 3. Reset the editIndex state to indicate that no task is being edited.

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
