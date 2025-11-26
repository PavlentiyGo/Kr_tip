import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    let newPassword = '';

    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  return (
    <div className="App">
      <h1>Генератор паролей</h1>
      <div className="password-display">
        <input type="text" value={password} readOnly placeholder="Сгенерированный пароль" />
      </div>
      <div className="controls">
        <label>
          Длина: <input
            type="number"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Заглавные буквы
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Цифры
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Символы
        </label>
      </div>
      <button onClick={generatePassword}>Сгенерировать</button>
    </div>
  );
}

export default App;