import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home'
import React from 'react';
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";
import './css/bootstrap.min.css';
import './css/responsive.css';
import './css/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login></Login>} />
          <Route path="Product/:id" element={<ProductDetails></ProductDetails>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
