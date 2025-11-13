// Next.js Not Found page migrated from src/pages/NotFoundPage.js
"use client";
import { useRouter } from "next/navigation";
import { Button, Container } from "react-bootstrap";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "100vh" }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "bold" }}>404</h1>
      <h2>Page Not Found</h2>
      <p className="text-muted">Oops! The page you are looking for does not exist.</p>
      <Button variant="primary" onClick={() => router.push("/")}>Go Home</Button>
    </Container>
  );
}
