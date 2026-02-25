import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  // setColor = () => {
  //   {
  //     backgroundColor: "green";
  //   }
  // };
  return (
    <>
      <div
        className="w-screen h-screen duration-200 flex justify-center items-end "
        style={{ backgroundColor: color }}
      >
        <div
          className="w-fit mb-20 p-4  flex gap-6 rounded-2xl"
          style={{ backgroundColor: "white" }}
        >
          <button
            className="rounded-2xl p-3 text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-2xl p-3 text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-2xl p-3 text-black"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="rounded-2xl p-3 text-black"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="rounded-2xl p-3 text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-2xl p-3 text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
