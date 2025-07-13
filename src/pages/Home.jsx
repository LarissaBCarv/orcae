import Header from "../components/Header";
import banner from "../assets/banner.png";
import MascoteGif from "../components/MascoteGif";
import Carousel from "../components/Carousel";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <img src={banner} alt="Banner decorativo" className="banner-img" />
      <section className="content-section">
        <div className="left-side">
          <Carousel />
          <p style={{ marginTop: "1rem", fontFamily: "Arial, sans-serif" }}>
            Aqui vai o texto explicativo
          </p>
        </div>

        <MascoteGif />
      </section>
    </div>
  );
}

export default Home;
