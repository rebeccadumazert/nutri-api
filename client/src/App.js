import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Brands from './components/Brands';
import BrandDetails from './components/BrandDetails';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Brands}></Route>
        <Route
          exact
          path="/:id"
          render={props => <BrandDetails {...props}></BrandDetails>}
        ></Route>
        <Route exact path="/item/:id" component={ItemDetails}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
