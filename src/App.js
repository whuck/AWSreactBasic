// Author:      will huck
// Version:     0.3.5
import React, { Component } from 'react';
import Country from './components/Country';
import { getCountries } from './services/countryService';

// App.css should be imported after all child components
import './App.css';

class App extends Component {

  state = {countries:getCountries(),totalMedals:0}
  handleIncrement = (c,i,m) => {
    let medalType = m === "g" ? "gold" : 
                    m === "s" ? "silver" : 
                    m === "b" ? "bronze" : "";
    let medalCount = this.state.countries[c][medalType];

    medalCount+=i;
    medalCount = medalCount < 0 ? 0 : medalCount;

    let countries = this.state.countries;
    countries[c][medalType] = medalCount;
    let newTotal = this.updateGrandTotal(countries);
    this.setState({countries:countries,totalMedals:newTotal});
  }
  updateGrandTotal(cList) {
    return cList.reduce((a,b)=>a+b.gold+b.silver+b.bronze,0);
  }

  sumCountryMedals = (c) => {
    let country = this.state.countries[c];
    let total = country.bronze + country.silver + country.gold;
    
    return total;
  }
  on
  render() { 
    const { countries, totalMedals } = this.state;
    return ( 
      <div className="App">
        <header className="App-header">
          huck's awesome medal app
        </header>
        <div className="countries">
                { countries.map(country => 
                    <Country 
                        key={ country.id } 
                        country = { country }
                        onInc = { this.handleIncrement }
                        cid={ country.id }
                    />)
                }
        </div>
        <div className="totals">
          <h1>total medals:&nbsp;{totalMedals}</h1>
          { countries.map(c => <div key={c.id}>
            <h2>{c.name}&nbsp;&nbsp;&nbsp;Total:{this.sumCountryMedals(c.id)}</h2>
            <h3>Gold:{c.gold}</h3>
            <h3>Silver:{c.silver}</h3>
            <h3>Bronze:{c.bronze}</h3>
          </div>)

          }
        </div>

      </div>
     );
  }
}
 
export default App;
