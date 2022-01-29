import React from 'react';
//import circa from '../assets/img/circa-tShirt.jpg';
import Gallery from '../components/Gallery.components';


class Index extends React.Component {
    state = {  } 
    render() { 
        return (
            <article>
                <Gallery products={this.props.products}/>
            </article>

        );
    }
}

export default Index;