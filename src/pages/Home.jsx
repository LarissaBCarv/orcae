import Header from "../components/Header";
import banner from "../assets/banner.png";
import Footer from "../components/Footer";
import MascoteGif from "../components/MascoteGif";
import Carousel from "../components/Carousel";

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
      <Footer />
    </div>
  );
}

export default Home;
