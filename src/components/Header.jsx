import logo from "../assets/logoHeader.png";
import { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Você pesquisou: ${search}`);
    // Aqui a lógica real de pesquisa
  };

  return (
    <header>
      <Link to="/">
        <img
          src={logo}
          alt="Logo Orçaê"
          style={{ height: "40px", cursor: "pointer" }}
        />
      </Link>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Pesquisar orçamento para..."
          value={search}
          onChange={handleSearchChange}
          className="search-input montserrat-400"
        />
      </form>

      <button className="footer-button" onClick={() => setShowLoginModal(true)}>
        Login / Cadastro
      </button>
      {showLoginModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowLoginModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Login / Cadastro</h2>
            <p>Funcionalidade de login ainda não implementada.</p>
            <button onClick={() => setShowLoginModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
