import React, { Component, Fragment } from 'react';
import {Button} from '@material-ui/core';


class NewCountry extends Component {

    render() {
        const {showDiag} = this.props;
        return (
            <Fragment>
                <Button onClick={showDiag}>Add Country</Button>
            </Fragment>

        );
    }
}
export default NewCountry;