// import React, {Component} from 'react';

// Stateless Functional Component

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{""}
                <span className="badge bg-pill bg-secondary m-1">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}


// export class Navbar extends Component {
//     render() {
//
//     }
// }

export default NavBar;