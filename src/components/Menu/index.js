import React from 'react'
import Logo from '../../assets/img/logo.png'
import Button from './styles'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da SciiFlix" />
            </a>
            
        </nav>
    )
}

export default Menu