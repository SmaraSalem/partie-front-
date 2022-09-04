import React, { useState } from "react";
import "./card.css";
import { deleteProduct } from "../../reduxToolkit/sliceProducts";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Product({ product, acter }) {
  const [likeObject, setLikeObject] = useState({
    idProduct: "",
    idUser: "62f76dee5a339afb752f107b",
  });
  const dispatch = useDispatch();

  const deleteProductById = (id) => {
    console.log(id);
    if (window.confirm("soyer sur que vous supprimer cet produit")) {
      axios.delete("http://localhost:5000/products/" + id).then(() => {
        dispatch(deleteProduct(id));
      });
    }
  };
  const likeProduct = (id) => {
    axios.put("http://localhost:5000/products/like", {
      idProduct: id,
      idUser: "62f76dee5a339afb752f107b",
      
    });
  };

  return (
    <div>
      {/*if the actor is a user  */}
      {acter == "users" ? (
        <div className="product-card">
          {" "}
          <div className="badge">new</div>
          <Link to={`/produits/detail/${product._id}`}>
            <div className="product-tumb">
              <img src={product.imgurl} alt="product" />
            </div>{" "}
          </Link>
          <div className="product-details">
            <span className="product-catagory">{product.category}</span>
            <h5>{product.name}</h5>

            <div className="product-price">{product.prix}$</div>
            <div className="product-bottom-details">
              <div className="product-links">
                <a>
                  <i class="fa " onClick={() => likeProduct(product._id)}>
                    ❤
                  </i>
                </a>
                <a>
                  <i className="fa fa-shopping-cart">
                    {product.userlike.length}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) :   (
        <div className="product-card">
          <div className="badge"></div>
          <div className="product-tumb">
            <img src={product.imgurl} alt="product" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{product.category}</span>
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <div className="product-price">${product.prix}</div>
            <div className="product-bottom-details">
              <div className="product-links">
                <a>
                  <i class="fa ">❤</i>
                </a>
                <a>
                  <i className="fa fa-shopping-cart">
                    {product.userlike.length}
                  </i>
                </a>
              </div>
              <Button
                variant="danger"
                onClick={() => {
                  deleteProductById(product._id);
                }}
              >
                X
              </Button>
              <Link to={`edit/${product._id}`}>
                <Button variant="outline-success" className="edit">
                  &#9998;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
