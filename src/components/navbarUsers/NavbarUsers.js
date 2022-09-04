import React from "react";
import "./navbaruser.css";
import imgpanier from "../../images/iconpanier.png";
import { Link, useNavigate } from "react-router-dom";


function NavbarUsers() {
  const navigate = useNavigate()


const listproductsFilter =(e)=>{
  var name = e.target.value.trim()  
  if(name!=""){
    navigate(`produits/name/${name}`)
  }
  else {
    navigate("produits")
  }
   

}

  return (
    <header class="section-header">
      <nav class="navbar navbar-dark navbar-expand p-0 bg-dark">
        <div class="container-fluid">
          <ul class="navbar-nav d-none d-md-flex mr-auto">
            <Link to={"/"}>
              <li class=" nav-link">Ecommerce_shopify</li>
            </Link>
            
            <li class=" nav-link">contact</li>
          </ul>

          <ul class="navbar-nav d-flex align-items-center">
          <Link to={"/"}>
            <li class="nav-item">
           
              <p class="nav-link d-flex align-items-center" data-abc="true">
                se connecter
              </p>
            </li></Link>
            <li class="nav-item">
            <p class="nav-link d-flex align-items-center" data-abc="true">
              s'insicrire
            </p>
          </li><li class="nav-item">
          <p class="nav-link d-flex align-items-center" data-abc="true">
            nom de client
          </p>
        </li>
            <li>
              <div class="d-flex flex-row">
                <img
                  src="https://i.imgur.com/EYFtR83.jpg"
                  class="rounded-circle"
                  width="60"
                />
              </div>
            </li>
            <li class="nav-item">
              <div class="d-flex flex-row">
                {" "}
                <select className="select_con_par">
                  <option></option>
                  <option>Paramétre</option>
                  <option>Se déconnecter</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section class="header-main border-bottom bg-white">
        <div class="container-fluid">
          <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div class="col-md-2">
              <img
                class="d-none d-md-flex"
                src="https://smartkeyword.io/wp-content/uploads/2019/06/1280px-Shopify_logo_2018.svg.png"
                width="100"
              />
            </div>
            <div class="col-md-8">
              <div class="d-flex form-inputs">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Chercher un produit..."
                  onChange={(e)=>{listproductsFilter(e)}}
                />
                <i class="bx bx-search"></i>
              </div>
            </div>

            <div class="col-md-2">
              <div class="d-flex d-none d-md-flex flex-row align-items-center">
                <img src={imgpanier} width="50px" />

                <div class="d-flex flex-column ms-2">
                  <span class="qty">1 Product</span>
                  <span class="fw-bold">$27.90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Link to={`produits/${"accessoires"}`}>
              <li class="nav-item">
                <a class="nav-link ">accessoire</a>
              </li>
            </Link>

            <Link to={`produits/${"electro-manager"}`}>
              <li class="nav-item">
                <a class="nav-link">electro-manager</a>
              </li>
            </Link>

            <Link to={`produits/${"informatique"}`}>
              <li class="nav-item">
                <a class="nav-link">informatique</a>
              </li>
            </Link>

            <Link to={"/produits"}>
              <li class="nav-item">
                <a class="nav-link ">tous les produits</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarUsers;
