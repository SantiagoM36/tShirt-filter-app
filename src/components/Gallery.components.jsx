import React from 'react';
import Card from './Card.components';

class Gallery extends React.Component {
    state = {}
    render() {
        const products = this.props.products;
        return (
            <section className='row'>
                {products.map(product =>                    
                    <Card key={product.id} product={product} />
                )}
            </section>
        );
    }
}

export default Gallery;