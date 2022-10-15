import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jokes from './components/Joke/Jokes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Jokes/>} />
          // <Route path='home' element={<Jokes />} />

          {/* <Route path='*' element={<NotFound/>}></Route> */}
        </Routes>

      </BrowserRouter>
  );
}

export default App;
