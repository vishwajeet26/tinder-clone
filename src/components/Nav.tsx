import React from 'react'
import logo from "../../public/whiteLogo.png"
import colorLogo from "../../public/colorLogo.png"
const Nav = ({minimal, authToken}: {minimal: boolean, authToken: boolean}) => {
  return (
    <nav>
        <div className='logo-container'>
            <img className='logo' src={minimal ? colorLogo : logo} />
        </div>
       {!authToken && <button className='nav-button'>Log in</button>}
    </nav>
  )
}

export default Nav