import { Routes, Route } from "react-router-dom"
import { Home } from '../src/pages/Home'
import { Login } from '../src/pages/Login'
import { Products } from '../src/pages/Products'
import { SignUp } from '../src/pages/SignUp'
import { NavBar } from '../src/components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
