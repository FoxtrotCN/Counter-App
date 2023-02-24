import React, {Component} from 'react';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;