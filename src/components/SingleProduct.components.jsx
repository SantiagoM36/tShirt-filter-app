import React from 'react';
import { Link } from 'react-router-dom';
//import {Outlet} from 'react-router-dom';

const SingleProduct = props => {
    const { image, title, price, description } = props.products;
    return (
        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`/assets/img/${image}`} alt={title} className='img-fluid'/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle">$ {price}</h6>
                        <p className="card-text">{description}</p>
                        <Link to={`/`} className="btn btn-primary">
                            Buy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;