import styled from 'styled-components';

export const NavbarWrapper = styled.div`
.navbar {
  background-color: #ffffff00;
    height: 4pc;
    width: 6pc;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    color: #000;
  }

  .nav-menu {
    background-color: #2b1448;
    width: 40pc;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: .3s cubic-bezier(0.65, 0.05, 0.36, 1);
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  .nav-menu.active {
    left: 0;
    transition: .3s ease-in-out;
  }

  .nav-text {
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    list-style: none;
    height: 60px;
    flex-direction: row;
      a {
        text-decoration: none;
        color: #151414;
        width: min-content;
        height: -webkit-fill-available;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        font-size: 30px;
        font-weight: 900;
        margin: auto;
        transition: .3s cubic-bezier(0.65, 0.05, 0.36, 1);
        flex-direction: column;
        margin-top: 10pc;
          &:hover {
            font-size: 30px;
            transition: .3s ease-in-out;
            letter-spacing: 5px;
          }
      }
  }

  .nav-menu-items {
  width: 100%;
  }

  .navbar-toggle {
    background-color: #2b1448;
    width: 100%;
    height: 80px;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    border-top-right-radius: 20px;
    align-items: center;
  }

  span {
    margin-left: 16px;
    color: white;
  }
  svg {
    color: #9340FF;
}
    
`;

