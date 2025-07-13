import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
// Se quiser Header fixo em todas as páginas, descomente abaixo:
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* <Header /> Se quiser o Header fora das páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
