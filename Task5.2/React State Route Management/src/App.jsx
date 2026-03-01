import Home from './pages/Home/Home'

import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/About/About'
import { Layout } from './Layout'
import ProductCard from './pages/Products/ProductCard'
import ProductDetail from './pages/Products/ProductDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductCard />} />
         <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App