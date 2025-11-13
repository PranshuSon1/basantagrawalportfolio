// Next.js Login page migrated from src/pages/Login.js
"use client";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Container, Form, InputGroup, Spinner } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await login(username, password);
      if (result.success) {
        router.push('/admin');
      } else {
        alert(result.message || "Invalid credentials");
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ maxWidth: "400px", marginTop: "100px" }}>
      <h2 className="text-center mb-4">Admin Login</h2>
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
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <Button
              variant="outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
              style={{ borderLeft: 'none' }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
        </Form.Group>
        <Button type="submit" className="w-100" disabled={loading}>
          {loading ? (
            <>
              <Spinner animation="border" size="sm" /> Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Container>
  );
}
