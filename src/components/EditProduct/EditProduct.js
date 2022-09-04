import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { updateProduct } from "../../reduxToolkit/sliceProducts";
import { useNavigate } from "react-router-dom";


function EditProduct() {
  const [objectProductModify, setObjectProductModify] = useState({});
  let navigate =useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/products/" + id).then((res) => {
      setObjectProductModify(res.data);
    });
  }, []);

  const updateObjectProduct = (e) => {
    setObjectProductModify({
      ...objectProductModify,
      [e.target.name]: e.target.value,
    });
   
  };
  const setNewProduct = async () => {
    axios
      .put("http://localhost:5000/products/" + id, objectProductModify)
      .then((result) => {
        dispatch(updateProduct(result.data));






        
        setObjectProductModify({
          name: "",
          description: "",
          imgurl: "",
          prix: "",
        });
        navigate("/admin/products")

      });
  };

  return (
    
      <div class="form-style-6">
        <h1>Mettre à jour ce produit</h1>
        <form>
          <select
            placeholder="categorie "
            name="category"
            onChange={(e) => updateObjectProduct(e)}
          >
            <option>{objectProductModify.category}</option>
            <option>-------</option>

            <option>informatique</option>
            <option>accessoires</option>
            <option>electro-manager</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="nom de produit"
            value={objectProductModify.name}
            onChange={(e) => updateObjectProduct(e)}
          />
          <input
            type="text"
            name="imgurl"
            placeholder="url d'image "
            value={objectProductModify.imgurl}
            onChange={(e) => updateObjectProduct(e)}
          />
          <input
            type="text"
            name="prix"
            placeholder="prix en DT "
            value={objectProductModify.prix}
            onChange={(e) => updateObjectProduct(e)}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description "
            value={objectProductModify.description}
            onChange={(e) => updateObjectProduct(e)}
          />
          <Button variant="outline-success" onClick={() => setNewProduct()}>
            confirme
          </Button>
          ---
          <Link to={"/admin/products"}>
            <Button variant="danger">annuler</Button>
          </Link>
        </form>
      </div>
    
  );
}

export default EditProduct;
