import React, { Component } from 'react';
import Country from './Country';
class Countries extends Component {
    state = { 
        countries: [
          {id:0,name:'usa',gold:1},
          {id:1,name:'china',gold:0}
        ]
    } 
    render() {
        return (
            <div className="countries">
                { this.state.countries.map(country => 
                    <Country 
                        key={ country.id } 
                        country = { country }
                    />)
                }
            </div>
        );
    }
}
export default Countries;