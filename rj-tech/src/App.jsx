import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import ContextProvider from './context/Context';
import Airpods from "./pages/Airpods";
import Accessories from "./pages/Accessories";
import Cases from "./pages/Cases";
import Chargers from "./pages/Chargers";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route path="/airpods" element={<Airpods />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/chargers" element={<Chargers />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
