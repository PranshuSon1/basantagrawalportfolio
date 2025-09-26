import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold" }}>404</h1>
      <h2>Page Not Found</h2>
      <p className="text-muted">
        Oops! The page you are looking for does not exist.
      </p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Container>
  );
}
