import React from 'react'
import './Header.css'
import img1 from '../../assets/Img/image.png'
import NotificationsSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import '../../index.css';
function Header() {
  return (
    <section className='App'>
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
            <SearchIcon />
            <NotificationsSharpIcon />
            <AccountBoxSharpIcon />
            <ArrowDropDownSharpIcon />
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header