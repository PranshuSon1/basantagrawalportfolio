import Spinner from "react-bootstrap/Spinner";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function ProtectedRoute({ children }) {
  const { user ,loading } = useAuth();

   if (loading) {
    // Show spinner while checking localStorage
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}