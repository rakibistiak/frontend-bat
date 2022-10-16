import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          // <Route path='home' element={<Home />} />

          {/* <Route path='*' element={<NotFound/>}></Route> */}
        </Routes>

      </BrowserRouter>
  );
}

export default App;
