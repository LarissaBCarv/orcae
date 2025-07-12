import logo from "../assets/logoHeader.png";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Você pesquisou: ${search}`);
    // Aqui você pode integrar a lógica real de pesquisa
  };

  return (
    <header>
      <img src={logo} alt="Logo Orçaê" style={{ height: "40px" }} />

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Pesquisar orçamento para..."
          value={search}
          onChange={handleSearchChange}
          className="search-input montserrat-400"
        />
      </form>

      <button className="login-button montserrat-700">Login / Cadastro</button>
    </header>
  );
}

export default Header;
