import "./App.css";
import { MainWrapper } from "./App.styles";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import AppProviders from "../../providers/AppProviders";
import Slider from "../../components/features/slider/Slider";

function App() {
  return (
    <AppProviders>
      <MainWrapper className="app">
        <Header />

        <article>
          <Slider />
        </article>

        <Footer />
      </MainWrapper>
    </AppProviders>
  );
}

export default App;
