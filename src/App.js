import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import Footer from './common/Footer';
import MainPage from './layout/MainPage';
import GiftWrapping from './layout/GiftWrapping';
import Contact from './layout/Contact';
import Catalog from './layout/Catalog';
import SearchOverlay from './common/SearchOverlay';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchOverlay />
        <Header />
        <Switch>
          <Route path="/home" component={MainPage} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/giftwrapping" component={GiftWrapping} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>  
  );
}

export default App;
