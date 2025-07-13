import Header from "../components/Header";
import "../styles/About.css";

function About() {
  return (
    <div>
      <Header />
      <div className="about-wrapper">
        <img
          src="./src/assets/about.png"
          alt="About decorativo"
          className="about-img"
        />
        <div className="about-container">
          <h1>Sobre o Orçaê</h1>
          <h2>O que é o Orçaê?</h2>
          <p>
            Orçaê é uma plataforma feita para simplificar a busca pelos melhores
            preços na correria do dia a dia. Reunimos orçamentos atualizados de
            diferentes categorias em um só lugar, para que você economize tempo
            e dinheiro.
          </p>
          <h2>Para quem é o Orçaê?</h2>
          <p>
            O Orçaê é ideal para quem busca praticidade e eficiência na hora de
            comprar. Seja para decorar sua casa, planejar uma viagem, montar um
            computador, organizar uma festa ou adquirir materiais de estudo,
            aqui você encontra tudo com facilidade.
          </p>
          <h2>Como funcionam os orçamentos?</h2>
          <p>
            Os preços são atualizados diariamente e selecionados de sites
            confiáveis, com links diretos para os produtos. Assim, você tem
            sempre informações atuais e seguras para tomar a melhor decisão.
          </p>
          <h2>Por que o Orçaê é diferente?</h2>
          <p>
            Apesar de ser um projeto pessoal, o Orçaê entrega uma experiência
            organizada e confiável, focada em facilitar sua vida. A atualização
            manual dos dados garante cuidado e qualidade nas informações.
          </p>
          <h2>A inspiração por trás do Orçaê</h2>
          <p>
            Criado a partir da necessidade real de economizar tempo durante
            pesquisas por equipamentos, móveis, materiais e viagens, o Orçaê é
            um projeto que une potencial técnico e propósito prático.
          </p>
          <h2>O futuro do Orçaê</h2>
          <p>
            Hoje, o Orçaê é um portfólio pessoal com possibilidade de
            crescimento, podendo se tornar um produto real e útil para ainda
            mais pessoas que valorizam o tempo e querem fazer escolhas
            inteligentes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
