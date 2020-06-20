import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

import './index.css'
import FormBuilder from './pages/FormBuilder';
import FormExample from './pages/FormExample';

function App() {
  return (
    <div className="container">
    <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/formbuilder" component={FormBuilder} />
        <Route path="/formexample" component={FormExample} />
      </Switch>
    </div>
  );
}

export default App;
