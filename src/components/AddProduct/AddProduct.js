import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./addproduct.css";
import axios from "axios";
import { addProduct } from "../../reduxToolkit/sliceProducts";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const [newproduct, setNewproduct] = useState({
    name: "",
    description: "",
    imgurl: "",
    category: "",
    prix: "",
    userlike: [],
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormChange = (e) => {
    setNewproduct({ ...newproduct, [e.target.name]: e.target.value.trim() });
  };
  const addNewProduct = () => {
    if (newproduct.name !== "" && newproduct.category !== "") {
      axios.post("http://localhost:5000/products", newproduct).then((res) => {
        dispatch(addProduct(res.data));

        if (window.alert("votre nouvau produit a ete ajouter")) {
          setNewproduct({
            name: "",
            description: "",
            imgurl: "",
            category: "",
            prix: "",
          });
        }
        navigate("/admin/products");
      });
    } else if (newproduct.name == "") {
      alert("le nom  de la produit est obligatoire");
    } else {
      alert("le categorie de la produit est obligatoire");
    }
  };

  return (
    <div class="form-style-6">
      <h1>Nouveau produit</h1>
      <form>
        <select
          placeholder="categorie "
          name="category"
          onChange={(e) => onFormChange(e)}
        >
          <option></option>
          <option>informatique</option>
          <option>accessoires</option>
          <option>electro-manager</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="nom de produit"
          onChange={(e) => onFormChange(e)}
        />
        <input
          type="text"
          name="imgurl"
          placeholder="url d'image "
          onChange={(e) => onFormChange(e)}
        />
        <input
          type="text"
          name="prix"
          placeholder="prix en DT "
          onChange={(e) => onFormChange(e)}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description "
          onChange={(e) => onFormChange(e)}
        />
        <Button
          variant="outline-success"
          onClick={() => {
            addNewProduct();
          }}
        >
          Ajouter
        </Button>
        ----
        <Link to={"/admin/products"}>
          <Button variant="danger">annuler</Button>
        </Link>
      </form>
    </div>
  );
}

export default AddProduct;
