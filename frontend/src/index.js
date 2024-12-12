import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { Home } from './Pages/Home';
import { Apropos } from './Pages/Apropos';
import { NotFound } from './Pages/404';
import { Location } from './Pages/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/apropos" exact element={<Apropos />} />
        <Route path="/location/:id" exact element={<Location />} />
        <Route path="*" exact element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
