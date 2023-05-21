import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import dummyText from "./DummyText";
import socialLogos from "./assets/socialLogos.png";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Section
          className="section1"
          image={socialLogos}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section title={<Hero />} dark={true} />
        <Section
          title="Section 4"
          // subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          // subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
