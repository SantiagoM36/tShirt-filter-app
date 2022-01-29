import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { image, title, price, id } = props.product;
  return (
    <div className="card my-3 mx-1" style={{ "width": "18rem" }}>
      <img src={`/assets/img/${image}`} className="card-img-top img-fluid" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          $ {price}
        </p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Card;