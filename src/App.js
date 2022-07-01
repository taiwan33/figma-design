import BelowBody from "./components/BelowBody";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LowerBody from "./components/LowerBody";
import RequestBody from "./components/RequestBody";

function App() {
  return (
    <div className=" ">
      <Header />
      <Body />
      <LowerBody />
      <BelowBody />
      <RequestBody />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
