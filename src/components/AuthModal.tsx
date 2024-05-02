import 'flowbite'
import { useAppContext } from '../context/AppContext'

const AuthModal: React.FC = () => {
  const { isAuthModalOpen, toggleAuthModal, handleAuthTypeChange, authType } =
    useAppContext()

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden={!isAuthModalOpen}
      className={`animate__animated animate__pulse ${
        isAuthModalOpen ? '' : 'hidden'
      } fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {authType === 'Sign in'
                ? 'Please log in to access our platform'
                : 'Register to access our platform'}{' '}
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={toggleAuthModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              {authType === 'Sign up' && (
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="privacy"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    By proceeding, I acknowledge that I have read and agree to
                    the terms of use and privacy policy.{' '}
                  </label>
                </div>
                {authType === 'Sign in' && (
                  <a
                    href="#"
                    className="text-sm text-red-700 hover:underline dark:text-red-500"
                  >
                    Lost Password?
                  </a>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                {authType === 'Sign in' ? 'Login to your account' : 'Sign up '}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                {authType === 'Sign in'
                  ? 'Not registered?'
                  : 'Already registered?'}{' '}
                <a
                  href="#"
                  className="text-red-700 hover:underline dark:text-red-500"
                >
                  {authType === 'Sign in' ? (
                    <span
                      onClick={() => {
                        handleAuthTypeChange('Sign up')
                      }}
                    >
                      Create account{' '}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        handleAuthTypeChange('Sign in')
                      }}
                    >
                      Login
                    </span>
                  )}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
