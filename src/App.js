import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from './components/NabBarComponent';
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <AuthProvider>

   
     <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route with newsId */}
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
     </AuthProvider>
  );
}
