import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'
import MainLayout from '../layouts/MainLayout'

const Cart = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <h2 className="text-white text-3xl"> Cart </h2>
          <span className="shadow bg-white text-gray-600 p-1 rounded text-sm font-bold">
            2 dishes
          </span>
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-bold">Need help?</h2>
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <small className="text-gray-200">(555) 555-1234</small>
          </span>
        </div>
      </div>

      <p className="shadow rounded bg-gray-500 text-white text-center p-2">
        Log in or Register now and benefit from free shipping and easier
        returns!
      </p>

      <section className="antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <CartItem />
              </div>
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Cart
