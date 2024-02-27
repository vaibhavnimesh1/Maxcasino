import Banner from "./component/Banner";
import Card from "./component/Card.jsx";
import CardList from "./component/CardList.jsx";
import Header from "./component/Header";
import Hero from "./component/Hero.jsx";
// import CardList from "./component/CardList.jsx";
import SmallBanner from "./component/SmallBanner.jsx";
import LowerBanner from "./component/LowerBanner.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <div className="  cover-container-fluid d-flex h-auto  mx-auto flex-column pt-0 ">
      <Header />
      <Banner />
      <Hero />
      <SmallBanner />
      <CardList title="Casino" />
      <CardList title="Top Rated Game " />
      <LowerBanner title="Live Casino" />
      <Footer />
    </div>
  );
};

export default App;
