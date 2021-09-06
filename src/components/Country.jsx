import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';

class Country extends Component {
    state = {
        name: this.props.country.name == null ? "" : this.props.country.name,
        gold: this.props.country.gold == null ? 0 : this.props.country.gold
    }
    handleIncrement = () => {
        console.log("handle increment["+this.state.name+"]");
        var g = this.state.gold;
        g++;
        this.setState({gold:g});
    }
    render() {
        return (
            <div className="country">
                <div className="name">{this.state.name}</div>
                <div className="medals">{this.state.gold}</div>
                <Button color="info" className="incrementMedalBtn" onClick={ () => this.handleIncrement() }><AddCircle color="primary"></AddCircle></Button>
            </div>

        );
    }
}
export default Country;