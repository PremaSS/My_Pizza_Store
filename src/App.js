import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
// import Sort from './Components/Sort';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Main />} />
            {/* <Route exact path="/sort" element={<Sort />} /> */}
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
