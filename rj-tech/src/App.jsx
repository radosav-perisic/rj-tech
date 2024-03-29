import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import Checkout from "./pages/Checkout"
import ContextProvider from './context/Context'

function App() {
 

  return (
      <div className="App">
        <ContextProvider>
       <Router>
       <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        </Routes>
       </Router>
       </ContextProvider>
      </div>
  )
}

export default App
