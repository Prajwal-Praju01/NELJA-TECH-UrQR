import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage/SolutionDetailPage";
import HowItWorksPage from "./pages/HowItWorksPage/HowItWorksPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PlaceholderPage from "./pages/PlaceholderPage/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetailPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          {/* Catch-all → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
