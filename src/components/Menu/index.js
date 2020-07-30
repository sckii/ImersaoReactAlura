import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { Button, NavBar, LogoStyled } from './styles'


function Menu() {
    return (
        <NavBar>
            
            <Link to='/' >
                <LogoStyled src={Logo} />
            </Link>

            <Button as={Link} to='/cadastro/video'>
                Novo Video
            </Button>
        
        </NavBar>
    )
}

export default Menu