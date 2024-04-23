import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import ListCenter from './Listpage/ListCenter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-center" element={<ListCenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
