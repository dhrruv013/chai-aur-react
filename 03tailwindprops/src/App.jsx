import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Dhruv",
    age: "21",
  };
  let myObj2 = {
    name: "Raju",
    age: "21",
  };
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="text-3xl font-bold underline rounded-xl bg-green-400 text-black p-6 mb-4">
        Hello world!
      </h1>
      {/* <Card myObjj="dhruv" /> */}
      <Card myObj={myObj} />
      <Card myObj={myObj2} />
    </>
  );
}

export default App;
