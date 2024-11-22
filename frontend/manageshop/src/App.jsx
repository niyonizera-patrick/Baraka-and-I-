import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import AdminPanel from "./components/AdminPanel";
import Home from "./components/home";
// import ProductPage from "./components/product";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include Navigation for all pages */}
        <Navigation />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<ProductPage />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
