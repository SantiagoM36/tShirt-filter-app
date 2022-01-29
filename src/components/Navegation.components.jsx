import React from 'react';
import { NavLink } from 'react-router-dom';

const Navegation = props => {

    const onHandleChange = e => {
        props.searchProduct(e.target.value)
    }

    return (
        <>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home  </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <form className="form-inline offset-5">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="search"
                        onChange={onHandleChange}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

export default Navegation;