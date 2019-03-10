import React, { Component } from 'react';
import Navbar from './components/navbar';
import Tourlist from "./components/tourlist";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Tourlist/>
      </div>
    );
  }
}

export default App;
