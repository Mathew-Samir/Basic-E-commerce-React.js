import Navbars from "./component/Navbar";
import ProductList from "./component/ProductList";
import Slider from "./component/Slider";
import About from "./component/About";
import ProductDetails from "./component/ProductDetails";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<> <Slider /> <ProductList /> </>} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
