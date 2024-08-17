import React, { Component } from 'react';

class Identity extends Component {
    state = {};
    render() {
        return (
            <>
                <div className="element">
                    <label htmlFor="">Name</label>
                    <p>{this.props.name}</p>
                </div>
                <div className="element">
                    <label htmlFor="">Surname</label>
                    <p>{this.props.surname}</p>{' '}
                </div>
            </>
        );
    }
}

export default Identity;
