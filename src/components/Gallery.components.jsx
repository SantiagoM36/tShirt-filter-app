import React from 'react';
import { connect } from 'react-redux';
import Card from './Card.components';

class Gallery extends React.Component {
    state = {}
    render() {
        const { products } = this.props.products;
        return (
            <section className='row'>
                {products.map(product =>                    
                    <Card key={product.id} product={product} />
                )}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.items
    }
}

export default connect(mapStateToProps)(Gallery);