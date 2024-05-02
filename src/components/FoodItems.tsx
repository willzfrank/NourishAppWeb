import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import 'animate.css'

interface FoodItemProps {
  _id: string
  name: string
  description: string
  price: number
  image: string
}

const CartControls: React.FC<{ _id: string }> = ({ _id }) => {
  const { addToCart, removeFromCart, cart } = useAppContext()
  const quantityInCart = cart[_id] || 0

  return (
    <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-[50px] bg-white p-[6px]">
      <img
        src={assets.remove_icon_red}
        alt=""
        className="cursor-pointer w-[30px]"
        onClick={() => removeFromCart(_id)}
      />
      <p className="text-black">{quantityInCart}</p>
      <img
        src={assets.add_icon_green}
        alt=""
        className="cursor-pointer w-[30px]"
        onClick={() => addToCart(_id)}
      />
    </div>
  )
}

const FoodItems: React.FC<FoodItemProps> = ({
  _id,
  name,
  description,
  price,
  image,
}) => {
  const { addToCart, cart } = useAppContext()
  const quantityInCart = cart[_id] || 0

  return (
    <div className="w-[47%] md:w-[24%] text-[#e8e8e8] shadow-sm shadow-slate-50 mt-[30px] m-auto rounded-[15px] animate__animated animate__fadeIn">
      <div className="relative ">
        <img src={image} alt="" className="rounded-t-lg w-full rounded-tr-lg" />
        {quantityInCart === 0 ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="cursor-pointer w-[35px] absolute bottom-[15px] right-[15px] rounded-[50%]"
            onClick={() => addToCart(_id)}
          />
        ) : (
          <CartControls _id={_id} />
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-[16px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[#FF6347] text-[22px] font-medium my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItems
