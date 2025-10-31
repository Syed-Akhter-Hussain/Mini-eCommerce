import React, { useState } from "react";
import api from "../services/api";

export default function AddProductForm({ token, onAdded }) {
  const [form, setForm] = useState({ name: "", price: "", category: "", stockStatus: "In Stock" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/products", form, { headers: { Authorization: `Bearer ${token}` } });
    setForm({ name: "", price: "", category: "", stockStatus: "In Stock" });
    if (onAdded) onAdded();
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop:16}}>
      <div className="form-row">
        <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input required placeholder="Price" type="number" step="0.01" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} />
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form,category:e.target.value})} />
        <select value={form.stockStatus} onChange={e=>setForm({...form,stockStatus:e.target.value})}>
          <option>In Stock</option><option>Out of Stock</option>
        </select>
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
}
