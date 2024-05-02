import { useRef, useState } from 'react'
import ExploreMenu from '../components/ExploreMenu'
import FoodMenu from '../components/FoodMenu'
import Header from '../components/Header'
import MainLayout from '../layouts/MainLayout'
import AppDownload from '../components/AppDownload'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const foodMenuRef = useRef<HTMLDivElement>(null)

  // Function to scroll to the FoodMenu component
  const scrollToFoodMenu = () => {
    if (foodMenuRef.current) {
      foodMenuRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <MainLayout>
      <Header />
      <ExploreMenu
        setSelectedCategory={setSelectedCategory}
        scrollToFoodMenu={scrollToFoodMenu}
      />
      <div ref={foodMenuRef}>
        <FoodMenu selectedCategory={selectedCategory} />
      </div>
      <AppDownload />
    </MainLayout>
  )
}

export default Home
