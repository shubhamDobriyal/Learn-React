import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ludo from './components/ludo/Ludo';
import Home from './Home';
import Clock from './components/clock/Clock';
import Gallery from './components/gallery/Gallery';
import IdentityCard from './components/id-card/IdentityCard';
import reportWebVitals from './reportWebVitals';
import MusicPlayer from './components/music-player/MusicPlayer';
import TodoList from './components/to-do-list/TodoList';
import Accordion from './components/accordion/Accordion';
import GoogleKeepClone from './components/google-keep-clone/GoogleKeepClone';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MusicPlayer" element={<MusicPlayer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ludo" element={<Ludo />} />
        <Route path="/identityCard" element={<IdentityCard />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/googleKeepClone" element={<GoogleKeepClone />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
