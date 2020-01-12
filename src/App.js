import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import Footer from './common/Footer';
import MainPage from './layout/MainPage';
import GiftWrapping from './layout/GiftWrapping';
import Contact from './layout/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainPage /> */}
      {/* <Contact /> */}
      <GiftWrapping />
      <Footer />
    </div>
  );
}

export default App;
