import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Footer.css";

import confiancaIcon from "../assets/icons/confianca.png";
import calendarioIcon from "../assets/icons/calendario.png";
import linkIcon from "../assets/icons/link.png";
import lojaIcon from "../assets/icons/loja.png";

function Footer() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <footer className="footer">
      {/* Garantias */}
      <div className="footer-guarantees">
        <div className="guarantee-item">
          <img src={confiancaIcon} alt="Transparência e simplicidade" />
          <p>TRANSPARÊNCIA E SIMPLICIDADE</p>
        </div>

        <span className="separator">|</span>

        <div className="guarantee-item">
          <img src={calendarioIcon} alt="Orçamentos atualizados" />
          <p>ORÇAMENTOS ATUALIZADOS DIARIAMENTE</p>
        </div>

        <span className="separator">|</span>

        <div className="guarantee-item">
          <img src={linkIcon} alt="Lojas confiáveis" />
          <p>LINKS E LOJAS CONFIÁVEIS</p>
        </div>

        <span className="separator">|</span>

        <div className="guarantee-item">
          <img src={lojaIcon} alt="Produtos reais" />
          <p>PRODUTOS REAIS</p>
        </div>
      </div>

      {/* Botões */}
      <div className="footer-buttons">
        <Link to="/about">
          <button className="footer-button">Sobre o Orçaê</button>
        </Link>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="footer-button"
        >
          {showDetails ? "Esconder detalhes" : "Mostrar detalhes"}
        </button>
      </div>

      {showDetails && (
        <div className="footer-details">
          <p>Contato: contato@orcae.com</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>
      )}

      {/* Direitos autorais */}
      <p>© 2025 Orçaê</p>
    </footer>
  );
}

export default Footer;
