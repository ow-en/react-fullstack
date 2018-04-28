import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/"><h1>Yelp</h1></Link>
                <section>
                    Final Project
                </section>
            </div>
        );
    }
}

export default Header;