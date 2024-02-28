import Banner from "./component/Banner";
import CardList from "./component/CardList.jsx";
import Header from "./component/Header";
import Hero from "./component/Hero.jsx";
import SmallBanner from "./component/SmallBanner.jsx";
import LowerBanner from "./component/LowerBanner.jsx";
import Footer from "./component/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/auth/SignIn.jsx";
import SignUp from "./component/auth/SignUp.jsx";

const App = () => {
  return (
    <div className="cover-container-fluid d-flex h-auto mx-auto flex-column pt-0 ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <Hero />
                <SmallBanner />
                <CardList title="Casino" />
                <CardList title="Top Game" />
                <LowerBanner title="Live Casino" />
                <Footer />
              </>
            }
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
