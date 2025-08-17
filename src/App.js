import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from './components/NabBarComponent';
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";


export default function App() {
  return (
     <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route with newsId */}
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}
