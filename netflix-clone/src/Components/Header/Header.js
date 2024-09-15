import React from 'react'
import './Header.css'
import img1 from '../../assets/Img/image.png'
function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={img1} alt="" width='100px'/></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            {/* <li><SearchIcon /></li>
            <li><NoteficationsNoneIcons /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
