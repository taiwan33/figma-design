import BelowBody from "./components/BelowBody";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LowerBody from "./components/LowerBody";
import RequestBody from "./components/RequestBody";

function App() {
  return (
    <div className=" bg-gradient-to-b from-[#E5EFFF] to bg-white ">
      <Header />
      <Body />
      <LowerBody />
      <BelowBody />
      <RequestBody />
      <Footer />
    </div>
  );
}

export default App;
