import React, { useState } from 'react';


function App() {
  
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);
  const [newFruit, setNewFruit] = useState('');

 
  const handleInputChange = (e) => {
    setNewFruit(e.target.value); // Update the new fruit state with input value
  };

 
  const addFruit = () => {
    if (newFruit !== '') {
      setFruits([...fruits, newFruit]); // Add new fruit to the list
      setNewFruit(''); // Reset the input field after adding
    }
  };

  return (
    <div className="App">
      <h1>My Fruit List</h1>

      {/* Input field to type new fruit */}
      <input
        type="text"
        value={newFruit}
        onChange={handleInputChange}
        placeholder="Enter a fruit"
      />

      <button onClick={addFruit}>Add Fruit</button>
      
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
