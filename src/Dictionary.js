import React,{useState} from 'react'

const Dictionary = () => {

    const dictionary = [
        {
          word: "React",
          meaning: "A JavaScript library for building user interfaces.",
        },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." },
      ];
    
      const [text, setText] = useState("");
      const [display, setDisplay] = useState("");
      let [ans, setAns] = useState(null);
     
    
      const handleInput = (e) => {
        setDisplay("");
        const searchText = e.target.value;
        setText(searchText);
      };
    
      const handleDisplay = () => {
        for (let i = 0; i < dictionary.length; i++) {
          if (dictionary[i].word.toLowerCase() === text.toLowerCase()) {
            setDisplay(dictionary[i].meaning);
            setAns(true);
            return;
          } else {
            setAns(false);
          }
        }
      };

  return (
    <div>
      <title>title</title>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={text}
        onChange={handleInput}
      />
      <button onClick={handleDisplay}>Search</button>
      <br />
      <h4>Definition:</h4>
      {ans && <p>{display}</p>}
      {ans === false && <p>Word not found in the dictionary.</p>}
    </div>
  )
}

export default Dictionary