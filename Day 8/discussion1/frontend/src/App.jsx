import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   // Real-time clock update
  //   const interval = setInterval(() => setTime(new Date()), 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h2>
        It is{" "}
        {time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}
        .
      </h2>
    </div>
  );
}

export default App;
