import { Routes, Route } from "react-router-dom"
import { Home } from '../src/pages/Home'
import { Login } from '../src/pages/Login'
import { Products } from '../src/pages/Products'
import { SignUp } from '../src/pages/SignUp'
import { NavBar } from '../src/components/NavBar'
import { UserProvider } from './context/UserContext'
import { MyProfile } from "./pages/MyProfile"
import { ProductDetail } from "./routes/ProductDetail"
import { UserProfile } from "./pages/UserProfile"
import { UserDetail } from "./routes/UserDetail"
import { MercadoPago } from "./components/MercadoPago"
import { ProductMercadoPago } from "./routes/ProductMercadoPago"

function App() {
  return (
    <>
      <NavBar />
      <UserProvider>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
          <Route path="/productsmp/:productName" element={<ProductMercadoPago />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofile/:username" element={<UserDetail />} />
          <Route path="/mercadopago" element={<MercadoPago />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
