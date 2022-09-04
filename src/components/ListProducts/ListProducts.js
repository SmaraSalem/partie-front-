import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../reduxToolkit/sliceProducts";
import Product from "../product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./listProductsCss.css";

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function ListProducts({ acter }) {
  const [category, setCategory] = useState("");
  const [nameproduct, setNameproduct] = useState("");

  const dispatch = useDispatch();
 
 

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((result) => {
        dispatch(setProducts(result.data))
      
      })
      .catch((err) => {});
  }, [acter]);


    

 

  const Data = useSelector((state) => state.products.value);

  const filterByCategory = (gatego) => {
    setCategory(gatego);
  };
  const handelChange = (e) => {
    setNameproduct(e.target.value.trim());
    
  };

  if (category === "") {
    var productFilter = Data.filter((e) =>
      e.name.includes(nameproduct.toLowerCase())
    );
  } else
    var productFilter = Data.filter(
      (e) =>
        e.name.includes(nameproduct.toLowerCase()) && e.category === category
    );

  return (
    <div>
     
      {acter == "users" ? (
        <div className="productsList">
          {productFilter.map((e) => (
            <Product acter={acter} product={e} />
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <div className="filter-pruodcts">
            <input
              placeholder="saisir un nom de produit"
              onChange={(e) => {
                handelChange(e);
              }}
            />

            <Button
              variant="outline-primary"
              onClick={() => {
                filterByCategory("informatique");
              }}
            >
              informatique
            </Button>

            <Button
              variant="outline-secondary"
              onClick={() => {
                filterByCategory("electro-manager");
              }}
            >
              electro-manager
            </Button>

            <Button
              variant="outline-success"
              onClick={() => {
                filterByCategory("accessoires");
              }}
            >
              accessoires
            </Button>

            <Button
              variant="outline-warning"
              onClick={() => {
                filterByCategory("");
              }}
            >
              tout les produits
            </Button>

            <Link to="add">
              {" "}
              <Button variant="danger">+Produit </Button>
            </Link>
          </div>
          <div className="productsList">
            {productFilter.map((e) => (
              <Product product={e} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListProducts;
