import React, { Component } from 'react';



class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="heading1">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default Sidebar;