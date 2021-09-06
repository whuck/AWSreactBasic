import React, { Component, Fragment } from 'react';
import {Stars} from '@material-ui/icons';

class Medal extends Component {
    getColor = () => {
        let c = this.props.medalType;
        switch(c){
            case "b": return "Sienna";
            case "s": return "Silver";
            case "g": return "DarkGoldenRod";
            default:return "lime";
        }
    }
    render() {
        return (
            <Fragment>
                <Stars style={{color: this.getColor(), fontSize:40}}></Stars>
            </Fragment>

        );
    }
}
export default Medal;