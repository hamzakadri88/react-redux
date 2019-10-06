import React from 'react';
/* IMPORT COMPONENTS */
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Application React
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
