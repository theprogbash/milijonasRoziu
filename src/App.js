import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import Footer from './common/Footer';
import MainPage from './layout/MainPage';

function App() {
  return (
    <div className="App">
      <Header />

      <MainPage />

      <Footer />
    </div>
  );
}

export default App;
