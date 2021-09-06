import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import {RemoveCircle} from '@material-ui/icons';
class Country extends Component {
    state = {
        name: this.props.country.name == null ? "" : this.props.country.name,
        gold: this.props.country.gold == null ? 0 : this.props.country.gold
    }
    handleIncrement = (i) => {
        console.log("handle increment["+this.state.name+"]");
        var g = this.state.gold;
        g+=i;
        g = g < 0 ? 0 : g;
        this.setState({gold:g});
    }
    render() {
        return (
            <div className="country">
                <div className="name">{this.state.name}</div>
                <div className="medals">{this.state.gold}</div>
                <Button className="incrementMedalBtn" onClick={ () => this.handleIncrement(1) }><AddCircle color="primary"></AddCircle></Button>
                <Button className="incrementMedalBtn" onClick={ () => this.handleIncrement(-1)}><RemoveCircle color="secondary"></RemoveCircle></Button>
            </div>

        );
    }
}
export default Country;