import { useState } from 'react'
import '../styles/navbar.css'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Find Food')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleAuthModal, handleAuthTypeChange } = useAppContext()

  const { cart } = useAppContext()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const totalItems = Object.keys(cart).length

  return (
    <>
      <nav className="hidden md:flex flex-col lg:flex-row justify-between items-center transition-all duration-300 sticky z-10 top-0 left-0 py-0 md:py-4 bg-gradient-to-r from-gray-800 to-black">
        <Link to="/">
          <h2 className="text-white text-2xl font-bold mb-4 lg:mb-0 w-[150px] font-Outfit">
            NourishApp
          </h2>
        </Link>
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-white font-medium gap-[20px] text-[16px]">
          <li
            className={`cursor-pointer relative cool-link ${
              activeLink === 'Find Food'
                ? 'border-b-2 border-red-500 transition-all duration-300'
                : ''
            }`}
            onClick={() => setActiveLink('Find Food')}
          >
            Find Food
          </li>
          <li
            className={`cursor-pointer relative cool-link ${
              activeLink === 'Tracking'
                ? 'border-b-2 border-red-500 transition-all duration-300'
                : ''
            }`}
            onClick={() => setActiveLink('Tracking')}
          >
            Tracking
          </li>
          <li
            className={`cursor-pointer relative cool-link ${
              activeLink === 'Mobile-app'
                ? 'border-b-2 border-red-500 transition-all duration-300'
                : ''
            }`}
            onClick={() => setActiveLink('Mobile-app')}
          >
            Mobile-app
          </li>
          <li
            className={`cursor-pointer relative cool-link ${
              activeLink === 'Contact Us'
                ? 'border-b-2 border-red-500 transition-all duration-300'
                : ''
            }`}
            onClick={() => setActiveLink('Contact Us')}
          >
            Contact Us
          </li>
        </ul>
        <div className="flex items-center gap-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 cursor-pointer transition-all duration-300 transform hover:rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <div className="flex items-center gap-5">
            <Link to="/cart">
              <div className="relative cursor-pointer">
                <div className="bg-white p-2 rounded-md transition-all duration-300 transform hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                {/* dot */}
                <p className="w-4 flex items-center justify-center text-[10px] h-4 text-white bg-red-500 rounded-full absolute -top-1 right-0 font-medium transition-all duration-300">
                  {totalItems}
                </p>
              </div>
            </Link>
            <span
              className="text-white font-medium text-[14px] transition-all duration-300 hover:text-green-500 cursor-pointer"
              onClick={() => {
                toggleAuthModal()
                handleAuthTypeChange('Sign in')
              }}
            >
              Sign in
            </span>
            <button
              className="bg-green-500 glow-on-hover text-white font-medium py-2 px-4 rounded-md text-[14px] transition-all duration-300 hover:bg-green-600"
              onClick={() => {
                toggleAuthModal()
                handleAuthTypeChange('Sign up')
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <nav className="md:hidden sticky z-10 w-full px-4 top-0 left-0 bg-gradient-to-r from-gray-800 to-black">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold mb-4 lg:mb-0 w-[150px] font-Outfit">
            NourishApp
          </h2>
          <div className="flex items-center gap-2">
            {/* Cart icon remains the same */}
            <div className="cursor-pointer" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="bg-white p-5 rounded-md mt-4 animate__animated animate__backInDown">
            <ul className="gap-4 flex flex-col text-gray-800">
              <li
                className={`cursor-pointer font-medium transition-colors duration-300 hover:text-red-500 ${
                  activeLink === 'Find Food' ? 'text-red-500' : ''
                }`}
                onClick={() => setActiveLink('Find Food')}
              >
                Find Food
              </li>
              <li
                className={`cursor-pointer font-medium transition-colors duration-300 hover:text-red-500 ${
                  activeLink === 'Tracking' ? 'text-red-500' : ''
                }`}
                onClick={() => setActiveLink('Tracking')}
              >
                Tracking
              </li>
              <li
                className={`cursor-pointer font-medium transition-colors duration-300 hover:text-red-500 ${
                  activeLink === 'Mobile-app' ? 'text-red-500' : ''
                }`}
                onClick={() => setActiveLink('Mobile-app')}
              >
                Mobile-app
              </li>
              <li
                className={`cursor-pointer font-medium transition-colors duration-300 hover:text-red-500 ${
                  activeLink === 'Contact Us' ? 'text-red-500' : ''
                }`}
                onClick={() => setActiveLink('Contact Us')}
              >
                Contact Us
              </li>
              <button
                className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-300 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={() => {
                  toggleAuthModal()
                  handleAuthTypeChange('Sign in')
                }}
              >
                Sign In
              </button>
              <button
                className="bg-red-500 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 hover:bg-red-600"
                onClick={() => {
                  toggleAuthModal()
                  handleAuthTypeChange('Sign up')
                }}
              >
                Sign Up
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
