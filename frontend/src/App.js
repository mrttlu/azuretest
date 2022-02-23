import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState('');

  const getInfo =  async () => {
    const response = await axios.get('/api/info');
    setInfo(response.data);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <h1>API name: {info.name}</h1>
      <p>Author: {info.author}</p>
      <p>Basckend version: {info.version}</p>
    </>
  );
}

export default App;
