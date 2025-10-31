import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ProductList({ token }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("");

  const fetch = async () => {
    const res = await api.get("/products", { 
      headers: { Authorization: `Bearer ${token}` },
      params: { page, limit: 5, category: category || undefined }
    });
    setProducts(res.data.data);
    setTotal(res.data.total);
  };

  useEffect(() => { fetch(); }, [page, category]);

  return (
    <div>
      <h2 style={{marginBottom:8}}>Products</h2>
      <div style={{marginBottom:12, display:"flex", gap:8}}>
        <input placeholder="Filter by category" value={category} onChange={e=>setCategory(e.target.value)} />
        <button className="btn btn-primary" onClick={()=>{setPage(1); fetch();}}>Apply</button>
      </div>
      <table>
        <thead><tr><th>Name</th><th>Price</th><th>Category</th><th>Stock</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td data-label="Name">{p.name}</td>
              <td data-label="Price">${p.price}</td>
              <td data-label="Category">{p.category}</td>
              <td data-label="Stock">{p.stockStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop:12, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>Showing {products.length} of {total}</div>
        <div>
          <button className="btn" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Prev</button>
          <button className="btn" onClick={()=>setPage(p=>p+1)} style={{marginLeft:8}}>Next</button>
        </div>
      </div>
    </div>
  );
}
