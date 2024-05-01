import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" text-white py-8 m-auto w-[90%]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">NourishApp</h2>
          <p className="text-gray-400">
            Discover delicious and nutritious meals with our app.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/willzfrank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookSquare size={24} />
            </a>
            <a
              href="https://twitter.com/willzfrank001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitterSquare size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/godswill-udoh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <ul className="text-gray-400">
            <li className="mb-2">+1 (555) 123-4567</li>
            <li>contact@nourishapp.com</li>
          </ul>
        </div>
      </div>
      <hr className="my-10 border-none mx-0 bg-[#e2e2e2] h-[2px] " />
      <p className="text-center text-white font-medium text-[10px] transition-all duration-300">
        &copy; {new Date().getFullYear()} NourishApp. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
