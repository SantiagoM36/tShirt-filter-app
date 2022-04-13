import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.components';

import SingleProduct from '../components/SingleProduct.components';
import AboutUs from '../pages/AboutUs.pages';
import Contact from '../pages/Contact.pages';
import Index from '../pages/Index.pages';
import NotFound from '../pages/NotFound.pages';
import infoProducts from '../data/merchants.json';

import store from '../store';
import { getProducts } from '../services/api.services';
import { initProducts } from '../actions/filter.actions';
import { STORAGE_PRODUCTS } from '../utils/constants';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    componentDidMount() {
        getProducts().then(products => {
            store.dispatch(initProducts(products))
        })
    }

    getProductsFromStorage = () => {
        //const products = localStorage.getItem(STORAGE_PRODUCTS)
    }

    render() {
        const { products } = this.props.products;
        if (!products) return [];
        
        console.log('Props: ', this.props)

        return (
            <BrowserRouter>
                <Header title='Store App' />
                <Switch>
                    <Route exact path='/'>
                        <Index />
                    </Route>
                    <Route exact path='/product/:productId' render={props => {
                        let idProduct = props.location.pathname.replace('/product/', '');
                        if(!products[idProduct - 1]) return;
                        return (
                            <SingleProduct products={products[idProduct - 1]} />
                        )
                    }} />
                    <Route exact path='/about-us'>
                        <AboutUs product={products[2]} />
                    </Route>
                    <Route exact path='/contact'><Contact /></Route>
                    <Route path='*'><NotFound /></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.items
    }
}

export default connect(mapStateToProps)(Dashboard);