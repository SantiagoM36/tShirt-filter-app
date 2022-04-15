import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FILTER_ONE_PRODUCT, FILTER_SEARCH_PRODUCT } from '../actions/types';

const Navegation = props => {
    const onHandleChange = e => {
        props.filterProduct(e.target.value)
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
                <form className="form-inline offset-lg-4">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="search"
                        onChange={onHandleChange}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        products: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        filterProduct: item => dispatch({type: FILTER_SEARCH_PRODUCT, payload: item}),
        oneProduct: item => dispatch({type: FILTER_ONE_PRODUCT, payload: item})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Navegation);