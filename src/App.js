// Author:      will huck
// Version:     0.3.5
import React, { Component } from 'react';
import Country from './components/Country';

// App.css should be imported after all child components
import './App.css';

class App extends Component {
  state = { 
    countries: [
      {id:0,name:'usa',gold:1},
      {id:1,name:'china',gold:0}
    ]
  }


  render() { 
    const {countries} = this.state;
    return ( 
      <div className="App">
        <header className="App-header">
          huck's awesome medal app
        </header>
        { countries.map(country => 
          <Country 
            key={ country.id } 
            country = { country }
          />) }
      </div>
     );
  }
}
 
export default App;
