import React from 'react';
import { connect } from 'react-redux';
import Card from './Card.components';

class Gallery extends React.Component {
    render() {
        const { products, filter } = this.props.products;
        
        return (
            <section className='row'>
                { !filter.length
                    ? products.map(product =>                    
                        <Card key={product.id} product={product} />
                    )
                    : filter.map(product =>                    
                        <Card key={product.id} product={product} />
                    )
                }
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