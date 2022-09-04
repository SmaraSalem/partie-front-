import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../product/Product";

function ListProductsByName() {
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
  const { searshname } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      });
  }, [searshname]);


  return (
   
      <div className="productsList">
        {products.filter(e=>e.name.includes(searshname)).map((e) => (
          <Product product={e} acter={"users"} />
        ))}
      </div>
    
  );
}

export default ListProductsByName;
