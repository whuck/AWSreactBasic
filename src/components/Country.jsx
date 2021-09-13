import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import {RemoveCircle} from '@material-ui/icons';
import { Backspace } from '@material-ui/icons';
import Medal from './MedalFunctional';

class Country extends Component {

    render() {
        const { onInc, country, cid, onDelete } = this.props;
        
        return (
            <div className="country">
                <div className="name">{country.name} <Button onClick={ () => onDelete(cid)}><Backspace color="secondary"></Backspace></Button></div>
                <div className="medalBox">
                    <div className="medals">
                        {country.gold}<Medal medalType="g"></Medal>
                        <Button className="incrementMedalBtn" onClick={ () => onInc(cid,1,"g") }>
                            <AddCircle color="primary"></AddCircle></Button>
                        <Button className="incrementMedalBtn" onClick={ () => onInc(cid,-1,"g") }>
                            <RemoveCircle color="secondary"></RemoveCircle></Button>    
                    </div>
                    <div className="medals">
                        {country.silver}<Medal medalType="s"></Medal>
                        <Button className="incrementMedalBtn" onClick={ () => onInc(cid,1,"s") }>
                            <AddCircle color="primary"></AddCircle></Button>
                        <Button className="incrementMedalBtn" onClick={ () => onInc(cid,-1,"s") }>
                            <RemoveCircle color="secondary"></RemoveCircle></Button>    
                    </div>
                    <div className="medals">
                        {country.bronze}<Medal medalType="b"></Medal>
                        <Button className="incrementMedalBtn" onClick={ () => onInc(cid,1,"b") }>
                            <AddCircle color="primary"></AddCircle></Button>
                        <Button className="incrementMedalBtn" onClick={ () => onInc(cid,-1,"b") }>
                            <RemoveCircle color="secondary"></RemoveCircle></Button>    
                    </div>
                    
                </div>
                
            </div>

        );
    }
}
export default Country;