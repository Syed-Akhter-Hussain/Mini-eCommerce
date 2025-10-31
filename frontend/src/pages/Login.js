import React, { useState } from "react";
import api from "../services/api";

export default function Login({ onLogin }) {
  const [creds, setCreds] = useState({ username: "admin", password: "admin123" });
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", creds);
      onLogin(res.data.token);
    } catch (e) {
      setErr("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:360, margin:"3rem auto", display:"flex", flexDirection:"column", gap:8}}>
      <h2>Admin </h2>
      {err && <div style={{color:"red"}}>{err}</div>}
      <input placeholder="Username" value={creds.username} onChange={e=>setCreds({...creds,username:e.target.value})} />
      <input type="password" placeholder="Password" value={creds.password} onChange={e=>setCreds({...creds,password:e.target.value})} />
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
  );
}
