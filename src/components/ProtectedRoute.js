"use client";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";


export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

   if (loading) {
    // Show spinner while checking localStorage
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return children;
}