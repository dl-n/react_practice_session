import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <Fragment>
            <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <Link to='/' className="w3-bar-item w3-button"><b>Own</b> Projects</Link>
                <div className="w3-right w3-hide-small">
                <Link to="/login" className="w3-bar-item w3-button">Login</Link>
                <Link to="/register" className="w3-bar-item w3-button">Register</Link>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Header;