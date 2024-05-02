import React from 'react'
import { header_food_image } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex items-start md:items-center justify-between md:flex-row flex-col w-full px-6 py-0 md:py-12">
      <div className="max-w-xl w-full md:w-1/2">
        <div className="flex gap-1 flex-col items-start ">
          <div className="flex items-center gap-2 text-gray-50">
            <span className="text-xs">😊</span>
            <span className="text-xs">Easy Way to Order Your Food</span>
          </div>
          <h1 className="text-4xl mb-6">
            <span className="text-gray-50">Order Tasty & Fresh Food</span>{' '}
            <span className="text-[#E2293F]">anytime! </span>
            <br />
            <span className="text-base text-gray-50">
              Just confirm your order and enjoy our <br />
              delicious fastest delivery.
            </span>
          </h1>
        </div>

        <div className="flex space-x-4">
          <button className="px-4 py-3 text-base font-semibold text-white bg-[#E2293F] order-glow-on-hover rounded-xl animate__animated animate__flash">
            Order Now
          </button>
          <span className="text-[#F3B404] text-sm flex items-center underline cursor-pointer font-bold">
            See Menu
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:mt-0 mt-10 md:w-1/2 h-1/2">
        <img
          src={header_food_image}
          alt="header food"
          className="w-full h-full rounded-sm"
        />
      </div>
    </div>
  )
}

export default Header
