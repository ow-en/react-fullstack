import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="topbar">
                <Link to="/index"><h1>Layover</h1></Link>
                <section>
                    Final Project
                </section>
            </div>
        );
    }
}

export default Header;