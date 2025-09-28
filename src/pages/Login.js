// src/pages/Login.js
import { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const success = login(username, password);
      if (success) {
        navigate("/admin");
      } else {
        
      alert("Invalid credentials");

      }
    } catch (error) {
      console.log("Login failed :>> ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ maxWidth: "400px", marginTop: "100px" }}>
      <h2 className="text-center mb-4">Admin Login</h2>
      {/* {error && <p className="text-danger">{error}</p>} */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </Form.Group>
        <Button type="submit" className="w-100" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Container>
  );
}
