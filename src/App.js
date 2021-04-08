import "./App.css";
import Banner from "./component/Banner/Banner";
import Featured from "./component/Featured/Featured";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header.jsx";
import Offers from "./component/Offers/Offers";
import Products from "./component/Products/Products.jsx";
import Testimonial from "./component/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Offers />
      <Products />
      <Testimonial />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
