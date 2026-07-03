import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages.tsx/Home";
import AboutUs from "./pages.tsx/AboutUs";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
