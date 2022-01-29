import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.components';

import SingleProduct from '../components/SingleProduct.components';
import AboutUs from '../pages/AboutUs.pages';
import Contact from '../pages/Contact.pages';
import Index from '../pages/Index.pages';
import NotFound from '../pages/NotFound.pages';
import infoProducts from '../data/merchants.json';

class Dashboard extends React.Component {
    state = {
        products: [],
        searchProduct: ''
    }

    setProducts = products => this.setState({ products });
    setSearchProduct = searchProduct => {
        if (searchProduct.length >= 2) {
            this.setState({ searchProduct })
        } else {
            this.setState({ searchProduct: '' })
        }
    };

    componentDidMount() {
        this.setProducts(infoProducts)
    }

    render() {
        const { products } = this.state.products;
        if (!products) return [];
        
        let productsState = [...products]
        let productSearch = this.state.searchProduct;
        let result;

        

        if (productSearch !== '') {
            result = productsState.filter(product => (product.title.toLowerCase().indexOf(productSearch.toLowerCase()) !== -1))
        } else {
            result = productsState;
        }
        return (
            <BrowserRouter>
                <Header title='Store App' searchProduct={this.setSearchProduct} />
                <Switch>
                    <Route exact path='/'>
                        <Index products={result} />
                    </Route>
                    <Route exact path='/product/:productId' render={props => {
                        let idProduct = props.location.pathname.replace('/product/', '');
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

export default Dashboard;