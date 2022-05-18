import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import LoginPage from './LoginPage'
import SignUp from './SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search" caseSensitive={false} element={<SearchPage />} />

          <Route path='/Home' caseSensitive={false} element={<Home />} />

          <Route path='/LoginPage' caseSensitive={false} element={<LoginPage />} />

          <Route path='/SignUp' caseSensitive={false} element={<SignUp />} />

        </Routes>

        <Footer />
      </ Router>
      
    </div>

  );
}

export default App;