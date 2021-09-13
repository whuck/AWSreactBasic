// Author:      will huck
// Version:     0.3.5
import React, { Component } from 'react';
import Country from './components/Country';
import NewCountry from './components/NewCountry';
import { getCountries,addCountry,deleteCountry } from './services/countryService';

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
  showNewCountryDiag() {
    let c = new Country();
    let n = prompt("Enter Country Name:");

    if (n && n !== "") {
        c.name = n;
        this.setState({countries:addCountry(c)});
        
    } else return null;
  }
  sumCountryMedals = (c) => {
    
    let country = this.state.countries[c];
    if(country) {
      let total = country.bronze + country.silver + country.gold;
      return total;
    }
    return 0;
  }
  handleDelete(i) {
    //deleteCountry(i);
    this.setState({countries:deleteCountry(i)});
  }
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
                        onDelete = { this.handleDelete.bind(this) }
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
          <NewCountry showDiag = { this.showNewCountryDiag.bind(this) }></NewCountry>
      </div>
     );
  }
}
 
export default App;
