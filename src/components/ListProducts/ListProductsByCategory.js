import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../product/Product";

function ListProductsByCategory() {
  const [products, setProducts] = useState([
    {
      name: "",
      description: "",
      imgurl: "",
      category: "",
      prix: "",
      userlike: [],
    },
  ]);
  const { categoryfilter } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/category/" + categoryfilter)
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      });
  }, [categoryfilter]);

  return (
   
      <div className="productsList">
        {products.map((e) => (
          <Product product={e} acter={"users"} />
        ))}
      </div>
    
  );
}

export default ListProductsByCategory;
