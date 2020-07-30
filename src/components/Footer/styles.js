import styled from 'styled-components';


export const FooterBase = styled.footer`
  img {
    width: 100px;
  }
  font-size: 16px;
  margin-top: 60px;
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
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
    margin-bottom: 40px;
  }
`;
