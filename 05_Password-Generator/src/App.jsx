import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (characterAllowed) {
      str = str + "@{}[]!#$%^&*()_-";
    }

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const CopyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-3xl px-8 py-10 mx-auto my-12 text-white bg-gray-800 shadow-xl rounded-2xl">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-orange-400">
          Password Generator
        </h1>
        <div className="flex items-center mb-6 overflow-hidden bg-gray-700 rounded-lg shadow">
          <input
            type="text"
            value={password}
            placeholder="Your secure password"
            readOnly
            ref={passwordRef}
            className="flex-1 px-4 py-3 text-lg bg-transparent outline-none"
          />

          <button 
          onClick={CopyPasswordToClipboard}
          className="px-4 py-3 text-sm font-semibold text-white transition bg-orange-500 hover:bg-orange-600">
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-lg">Password Length</label>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="w-2/3 accent-orange-500"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span className="ml-2">{length}</span>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={numberAllowed}
              className="w-5 h-5 accent-orange-500"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Include Numbers</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={characterAllowed}
              className="w-5 h-5 accent-orange-500"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Include Special Characters</label>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 text-lg font-semibold text-white transition-all bg-orange-500 rounded-lg shadow hover:bg-orange-600"
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
