import { useState } from "react";

function Footer() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <footer className="footer">
      <p>© 2025 Orçaê - Todos os direitos reservados</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Esconder detalhes" : "Mostrar detalhes"}
      </button>
      {showDetails && (
        <div className="footer-details">
          <p>Contato: contato@orcae.com</p>
          <p>Telefone: (11) 99999-9999</p>
          {/* outros detalhes */}
        </div>
      )}
    </footer>
  );
}

export default Footer;
