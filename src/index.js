import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prefecturas from './pages/Prefecturas';
import { Clanes } from './pages/Clanes';
import { Historia } from './pages/Historia';
import { Personajes } from './pages/Personajes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prefecturas />} />
        <Route path="/prefecturas" element={<Prefecturas />} />
        <Route path="/clanes" element={<Clanes />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="*" element={<h1>Route does not
          exist</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
