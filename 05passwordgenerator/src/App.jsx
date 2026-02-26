import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += `!#$%&'()*+,-./:;<=>?@[\]^_\{|}~`;

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //Runs first on reload or any change in dependencies
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);
  // passwordGenerator();

  // let copyToClipboard = () => {
  //   navigator.clipboard.writeText(passwordRef.current.value);
  //   console.log(passwordRef.current.value);
  // };

  let copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);

    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-amber-400 pb-5 px-5 my-8  bg-gray-500">
        <h1 className="text-white text-center p-3">Password Generator</h1>
        <div className="flex shadow bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 mt-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
