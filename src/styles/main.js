import styled from "styled-components";

export const MainWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
    /* Navbar CSS */
    .container{
      max-width: 79pc;
      margin: 0 auto;
      padding: 0 15px;
    }
    .title{
      margin: auto;
      font-size: 20px;
    }
    h1.title1 {
      font-weight: 900;
    }
  //mobile code
  @media screen and (max-width: 700px) {
      .menu-bars {
      margin-left: 1rem;
      font-size: 2rem;
      background: none;
      color: #000;s
  }
  .nav-menu.active {
      left: 0;
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
      width: -webkit-fill-available;
      height: -webkit-fill-available;
  }
  .nav-menu {
      background-color: #2b1448;
      width: 40pc;
      height: 100vh;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: -175%;
      -webkit-transition: .3s cubic-bezier(0.65,0.05,0.36,1);
      transition: .3s cubic-bezier(0.65,0.05,0.36,1);
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
  }
  .profil img.profilİmg {
      box-shadow: 0px 0px 5pc 0px #9340ff;
      border-radius: 20pc;
      width: 15pc;
      height: 15pc;
      margin-top: 1pc;
      margin-left: 3pc;
  }
  .profil {
      float: none;
      margin-top: -40pc;
  }
  .text {
      text-align: center;
      padding-left: 0px;
      font-size: 32px;
      width: -webkit-fill-available;
      margin-top: 7pc;
  }
  .sosyalMedia {
      margin-left: 0px;
      margin-top: 1pc;
  }
}

`;