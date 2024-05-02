import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import { useAppContext } from './context/AppContext'
import AuthModal from './components/AuthModal'

function App() {
  const { isAuthModalOpen } = useAppContext()

  return (
    <>
      {isAuthModalOpen && <AuthModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </>
  )
}

export default App
