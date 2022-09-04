import "./App.css";
import React from "react";

import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "./reduxToolkit/store";

import AdminHome from "./pages/AdminHome";
import UserHome from "./pages/UserHome";
import ListProducts from "./components/ListProducts/ListProducts";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import ListUsers from "./components/ListUsers/ListUsers";
import ListProductsByCategory from "./components/ListProducts/ListProductsByCategory";
import DetailProduct from "./components/detailProduct/DetailProduct";
import ListProductsByName from "./components/ListProducts/ListProductsByName";
import Login from "./components/login/Login";
/**
 * Flow login:
 * 1. /login
 *      email / password => 
 *        a. save to sliceSession
 *        b. save userId => localstorage
 * 2. Refresh / 
 *       #
 *       # fetch(userId) => getUserById => user => sliceSession
 *       a. check localstorage if userId exist ? fetch(userId) =>  sliceSession : redirect /login
 *       
 * 
 * 
 * 
 * 
 */
function App() {
  return (
    <header>
      <Provider store={store}>
        <Routes>
          {/* Home page */}
            <Route path="/" element={<UserHome />}>
            <Route path="/login" element={<Login />} />

            {/* Normal user pages  */}
                <Route path="produits" element={<ListProducts acter = {'users'} />} />
                <Route path="produits/:categoryfilter" element={<ListProductsByCategory/>} />
                <Route path="produits/detail/:id" element={<DetailProduct/>} />
                <Route path="produits/name/:searshname" element={<ListProductsByName />} />
            {/* End User */}

          </Route>
            {/* Admin pages / espace administrateur */}
          <Route path="admin" element={<AdminHome />}>
            <Route path="products" element={<ListProducts/>} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
            <Route path="users" element={<ListUsers />} />

          </Route>
        </Routes>
      </Provider>
    </header>
  );
}

export default App;
