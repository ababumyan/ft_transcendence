import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './component/home/Home';
import Game from './component/game/Game';
import Contact from './component/contact/Contact';

const App  = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<App/>} />
          <Route path="/Game" element={<Game/>} />
          <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
