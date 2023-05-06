import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import ContextProvider from './context/Context'

function App() {
 

  return (
      <div className="w-full h-auto min-h-screen">
        <ContextProvider>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
        </Routes>
       </Router>
       </ContextProvider>
      </div>
  )
}

export default App
