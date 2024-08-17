import React, { Component } from 'react';

class BiographyInfo extends Component {
    state = {};
    render() {
        return (
            <div className="element">
                <label htmlFor="">Biography</label>
                <p>{this.props.info}</p>
            </div>
        );
    }
}

export default BiographyInfo;
