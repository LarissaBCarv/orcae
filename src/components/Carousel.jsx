import React, { useRef } from "react";
import "../styles/Carousel.css";

import viagemImg from "../assets/categorias/viagem.png";
import casaImg from "../assets/categorias/casa.png";
import pcImg from "../assets/categorias/pc.png";
import festaImg from "../assets/categorias/festa.png";
import educacaoImg from "../assets/categorias/educacao.png";
import automoveisImg from "../assets/categorias/automoveis.png";
import saudeImg from "../assets/categorias/saude.png";
import esportesImg from "../assets/categorias/esportes.png";

const categorias = [
  { imagem: viagemImg },
  { imagem: casaImg },
  { imagem: pcImg },
  { imagem: festaImg },
  { imagem: educacaoImg },
  { imagem: automoveisImg },
  { imagem: saudeImg },
  { imagem: esportesImg },
];

function Carousel() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 220; // ajustado para largura da imagem + gap
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">
      <button className="arrow left" onClick={() => scroll("left")}>
        ‹
      </button>

      <div className="carousel-container" ref={containerRef}>
        {categorias.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.imagem} alt={`Categoria ${index}`} />
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>
        ›
      </button>
    </div>
  );
}

export default Carousel;
