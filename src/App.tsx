import React from 'react';
import './App.css';
import MoviePage from './components/MoviePage/MoviePage';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';



const App: React.FC = () => {
  return (
    <Router>
      <Jumbotron>
        <NavLink to="/" activeClassName="selected">
          Home Page
        </NavLink>
        <br/>
        <NavLink to="/search" activeClassName="selected">
          Search
        </NavLink>
        <div style={{ marginLeft: '455px', width: '250px', marginBottom: '70px' }}>
          <Link to="/">
            <img className="hide-percy card-brand-image" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/139/2289100139_7fa13839-88b4-4bed-8b4f-f33c8e16065e.png?cb=1570022110" alt="Preview"></img>
          </Link>
        </div>
        <div className="App">
          <Switch>
            <Route path="/search" component={MoviePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Jumbotron>
    </Router>

  );
}

export default App;
