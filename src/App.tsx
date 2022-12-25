import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Search from './pages/Search';

import './Styles/App.css';
import './Styles/search.css';
import './Styles/nav.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
