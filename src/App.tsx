import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Contact from "./pages/contact";
import { useLenis } from "./hooks/useLenis";
import "lenis/dist/lenis.css";

export default function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="bg-black min-h-screen font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
