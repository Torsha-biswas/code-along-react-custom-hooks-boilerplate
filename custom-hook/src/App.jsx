import { useState, useEffect } from 'react';
import './App.css';

const useStorage = (key, initialValue) => {
  
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  
  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return [value, updateValue];
};

const App = () => {
  const [inputValue, setInputValue] = useStorage('textInput', '');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Local storage: {inputValue}</p>
    </div>
  );
};

export default App;