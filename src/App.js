import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import CardsBuy from './components/home-page/CardsBuy';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<CardsBuy />} />
      </Routes>
    </>
  );
}

export default App;
