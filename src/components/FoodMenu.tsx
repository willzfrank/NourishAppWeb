import React from 'react'
import { food_list } from '../assets/assets'
import FoodItems from './FoodItems'

interface FoodItem {
  price: number
  image: string
  _id: string
  name: string
  description: string
  category: string
}

interface FoodMenuProps {
  selectedCategory: string
}

const FoodMenu: React.FC<FoodMenuProps> = ({ selectedCategory }) => {
  const filteredFoodItems = food_list.filter(
    (item: FoodItem) =>
      selectedCategory === 'all' || selectedCategory === item.category
  )

  return (
    <div className="mt-[30px] p-4">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-semibold">
        Top dishes near you
      </h2>
      <div className="flex items-start flex-wrap gap-[10px]">
        {filteredFoodItems.length > 0 ? (
          filteredFoodItems.map((item: FoodItem, index: number) => (
            <FoodItems
              key={index}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="text-white text-center w-full my-5">
            No dish available in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default FoodMenu
