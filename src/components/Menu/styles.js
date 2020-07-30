import styled from 'styled-components'


export const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background-color: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
    
}

@media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
    }

`
export const NavBar = styled.nav`

        width: 100%;
        height: 74px;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-left: 5%;
        padding-right: 5%;
        background: var(--black);
        border-bottom: 2px solid var(--primary);
        animation-name: border;
        animation-duration: 9s;
        animation-iteration-count: infinite;       

    @keyframes border {
        0% { border-color: #2A7AE4 }
        25% { border-color: red }
        50% { border-color: #ffee00 }
        75% { border-color: red}
        100% { border-color: #2A7AE4 }
    }

        
    
    @media (max-width: 800px) {
        nav-up {
            height: 40px;
            justify-content: center;
        }
        body {
            --bodyPaddingTop: 40px;
            padding-top: var(--bodyPaddingTop);
        }
    }
`

export const LogoStyled = styled.img`
    max-width: 145px;
    
    
    @media (max-width: 800px) {
        margin-top: 5px;
        max-width: 85px;
    }

`