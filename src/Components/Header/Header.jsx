import React from 'react'
import './Header.css'
import logo from './logo.png'

const Header = () => {
    return (
        <div>
            <div className='top-nav'>
           <img className='logo' src={logo} alt="" />
                <h6><span className='text-info'>BN</span> / EN</h6>
            </div>
            <div className='bottom-nav'>
                <nav className='nav-body'>
                    <ul className='ul-responsive'>
                        <li className='nav-link'>Home</li>
                        <li className='nav-link'>Search</li>
                        <li className='nav-link'>Product</li>
                        <li className='nav-link'>About</li>
                        <li className='nav-link'>Contact</li>
                        <button className='login__button'>Login</button>
                        <button className='sign__up__button'>Sign Up</button>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header