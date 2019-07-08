import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Contact name="Mayuran" email="mayuran@gmail.com" phone="12345678"></Contact>
      <Contact name="Mayuran1" email="mayuran1@gmail.com" phone="1111111"></Contact>
    </div>
  );
}

export default App;
