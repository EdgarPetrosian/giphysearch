import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Search from './pages/Search';

import './Styles/App.css';
import './Styles/search.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Header/>
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/search' element={<Search />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
