import { useState } from "react";

const UseStateLesson = () => {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  return (
    <div className="programmingLanguageContainer">
      <p>Add 1 to the total: {number}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button onClick={handleAdd}>Click me!</button>
        <button onClick={handleReset}>Reset!</button>
      </div>
    </div>
  );
};

export default UseStateLesson;
