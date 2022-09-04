import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detailProduct.css";

function DetailProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgurl: "",
    category: "",
    prix: "",
    userlike: [],
  });
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/products/" + id).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  console.log(product);

  return (
    <div class=" d-lg-flex flex-lg-row d-flex flex-column-reverse bg-light mt-5">
      <div class="p-5" id="2">
     
        <p class="text-muted mb-4">{product.description}</p>
     
      </div>
      <div id="1">
        <img src={product.imgurl} class="w-75 h-75" alt="produit" />
      </div>
      <div class="p-5" id="2">
      <p class="p-green">{product.name}</p>
      <p class="fs-4 fw-bold">{product.prix}dt</p>
      <p class="text-muted mb-4">date :</p>
      <p class="text-muted mb-4">{product.createdAt}</p>
      <div class="btn btn-success px-4">ajouter</div>
    </div>
    </div>
  );
}

export default DetailProduct;
