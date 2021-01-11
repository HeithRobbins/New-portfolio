import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import eCommerce from './components/pages/eCommerce';
import Consulting from './components/pages/Consulting';
import Development from './components/pages/development'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/eCommerce' component={eCommerce} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/development' component={Development} />
      </Switch>
    </Router>
  );
}

export default App;
