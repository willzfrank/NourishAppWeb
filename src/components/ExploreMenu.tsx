import '../styles/ExploreMenu.css'
import { menu_list } from '../assets/assets'

interface MenuItemProps {
  item: Menu
}

interface Menu {
  menu_name: string
  menu_image: string
  category: string
  name: string
  time: string
  serving: string
}

const ExploreMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="card cursor-pointer">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <h2>{item.menu_name}</h2>
            <img src={item.menu_image} alt="" />
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">{item.category}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{item.name}</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{
                      mixBlendMode: 'normal',
                      textAnchor: 'none',
                      fontSize: 'none',
                      fontWeight: 'none',
                      fontFamily: 'none',
                      strokeDashoffset: '0',
                      strokeDasharray: '',
                      strokeMiterlimit: '10',
                      strokeLinejoin: 'miter',
                      strokeLinecap: 'butt',
                      strokeWidth: '1',
                      stroke: 'none',
                      fillRule: 'nonzero',
                      fill: '#20c997',
                    }}
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="card-footer">
                {item.time} &nbsp; | &nbsp; {item.serving}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExploreMenu = () => {
  return (
    <div>
      <div className="py-10">
        <h2 className="text-white text-3xl">Trending Menus</h2>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {menu_list.map((item, index) => (
          <ExploreMenuItem key={index} item={item} />
        ))}
      </div>
      <hr className="my-20 border-none mx-0 bg-[#e2e2e2] h-[2px] " />
    </div>
  )
}

export default ExploreMenu
