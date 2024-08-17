import React, { Component } from 'react';

class Photo extends Component {
    state = {};
    render() {
        return (
            <>
                <img src={this.props.profilePicture} alt="Profile" />
            </>
        );
    }
}

export default Photo;
