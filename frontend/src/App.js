import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import Login from "./pages/Login";
import "./index.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const onLogin = (t) => {
    localStorage.setItem("token", t);
    setToken(t);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  if (!token) return <Login onLogin={onLogin} />;

  return (
    <div className="container">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
        <h1>Mini eCommerce - Admin</h1>
        <div>
          <button className="btn" onClick={onLogout}>Logout</button>
        </div>
      </div>
      <ProductList token={token} />
      <AddProductForm token={token} onAdded={()=>window.location.reload()} />
    </div>
  );
}

export default App;
