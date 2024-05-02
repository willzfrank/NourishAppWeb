import { createContext, useState, useContext, ReactNode } from 'react'

// Define types for the context value and the props for the provider component
type Cart = { [key: string]: number }
type AppContextType = {
  cart: Cart
  addToCart: (item: string) => void
  removeFromCart: (item: string) => void
  isAuthModalOpen: boolean
  toggleAuthModal: () => void
  handleAuthTypeChange: (type: 'Sign in' | 'Sign up') => void
  authType: string
}
type AppProviderProps = {
  children: ReactNode
}

// Create AppContext
const AppContext = createContext<AppContextType | undefined>(undefined)

// Custom hook to access AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// AppProvider component
export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [cart, setCart] = useState<Cart>({})
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)
  const [authType, setAuthType] = useState<'Sign in' | 'Sign up'>('Sign in')

  // Function to add item to cart
  const addToCart = (item: string): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      updatedCart[item] = (updatedCart[item] || 0) + 1
      return updatedCart
    })
  }

  // Function to remove item from cart
  const removeFromCart = (item: string): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      if (updatedCart[item] > 1) {
        updatedCart[item] -= 1
      } else {
        delete updatedCart[item]
      }
      return updatedCart
    })
  }

  const toggleAuthModal = (): void => {
    setIsAuthModalOpen((prevState) => !prevState)
  }

  // Function to handle authentication type change
  const handleAuthTypeChange = (type: 'Sign in' | 'Sign up') => {
    setAuthType(type)
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isAuthModalOpen,
        toggleAuthModal,
        handleAuthTypeChange,
        authType,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
