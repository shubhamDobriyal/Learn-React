import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ludo from './Ludo';
import Form from './Form';
import Home from './Home';
import Events from './Events';
import Challenge1 from './Challenge1';
import Gallery from './Gallery';
import UseEffectHook from './UseEffectHook';
import IdentityCard from './IdentityCard';
import reportWebVitals from './reportWebVitals';
import MusicPlayer from './MusicPlayer';
import FormSubmit from './FormSubmit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from './UseContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/UseEffectHook" element={<UseEffectHook />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MusicPlayer" element={<MusicPlayer />} />
        <Route path="/UseContext" element={<UseContext />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/form" element={<Form />} />
        <Route path="/ludo" element={<Ludo />} />
        <Route path="/identityCard" element={<IdentityCard />} />
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/formSubmit" element={<FormSubmit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
