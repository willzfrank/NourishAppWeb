import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className="bg-gray-300 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Download the NourishApp</span>
            <span className="block">and enjoy delicious meals</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get access to our extensive menu, order your favorite meals, and
            enjoy convenient delivery straight to your doorstep.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="mr-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              src={assets.play_store}
              alt="Google Play Store"
              className="h-8 mr-2"
            />
            Get it on Google Play
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <img
              src={assets.app_store}
              alt="Apple App Store"
              className="h-8 mr-2"
            />
            Get it on App Store
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
