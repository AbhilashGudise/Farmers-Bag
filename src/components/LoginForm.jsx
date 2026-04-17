
import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubbmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = { name, email, password, gender, agree, city };

    // Using a real mock API endpoint for testing
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send data");
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        alert("Form submitted successfully!");
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
        setLoading(false);
      });
  };
  
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f7f6",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "16px",
      boxSizing: "border-box", // Important for padding
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: loading ? "#ccc" : "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: loading ? "not-allowed" : "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      marginTop: "10px",
      transition: "background-color 0.3s",
    },
    error: {
      color: "#ff4d4d",
      fontSize: "13px",
      marginTop: "10px",
      textAlign: "center",
    }
  };

return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>User Registration</h2>
        <form onSubmit={handleSubbmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input 
              style={styles.input}
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input 
              style={styles.input}
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              style={styles.input}
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Gender</label>
            <div style={{ display: "flex", gap: "15px" }}>
              <label><input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male</label>
              <label><input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female</label>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>City</label>
            <select value={city} onChange={(e) => setCity(e.target.value)} style={styles.input}>
              <option value="">Select City</option>
              <option value="Hyd">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <div style={{ ...styles.inputGroup, display: "flex", alignItems: "center", gap: "10px" }}>
            <input 
              type="checkbox" 
              checked={agree} 
              onChange={(e) => setAgree(e.target.checked)} 
            />
            <span style={{ fontSize: "13px" }}>I accept the terms and conditions</span>
          </div>

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Processing..." : "Submit"}
          </button>

          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;