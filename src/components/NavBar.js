import React from 'react'
import '../styling/navbar.css'
import favicon from '../assets/cpfavicon.png'

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div className='navbar-div'>
            <img src={favicon} alt='cp-favicon' className='cp-navbar'></img>
                <div>Menu</div>
            </div>
        )
    }
}

export default NavBar