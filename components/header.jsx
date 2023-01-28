import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";
import MenuIcon from "./menuIcon";

function Header() {
  return (
    <MainCont>
          <Link to="/">
      <img className="sm logo" src="/logo.png" alt="" />
          </Link>
      <ul className="ul bg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
      <div className="btns bg">
        <span>Login</span>
        <span>
          EN
          <img src={"/icons/downArrow.png"} alt="" />
        </span>
      </div>
      <div className="menuIcon sm">
        <MenuIcon />
      </div>
    </MainCont>
  );
}

export default Header;

const MainCont = styles.nav`
background: linear-gradient(340.93deg, rgba(124, 122, 40, 0.4) 13.93%, rgba(124, 122, 40, 0.15) 88.28%);
padding-left:70px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
height: 70px;
.logo{
  height: 60px;
}
.sm{
    display:none;
}
.bg{
    display:initial;
}
.btns{
    position:absolute;
    right:10px;
    top:50%;
    transform:translateY(-50%);
    margin-right:30px;
    span{
        margin-right:18px;
        img{
            position: absolute;
            width: 11px;
            bottom: -4px;
            right: -2px;
        
        }
    }
    span:nth-child(1){
        border:1px solid white;
        padding:10px 15px;
        border-radius:5px;
    }
}
.ul{
    display:flex;
    li{
        list-style-type: none;
    }
    a{
        margin-right:15px;
    }
}
@media only screen and (max-width: 700px) {
    background: linear-gradient(90.02deg, #020A31 0.03%, #2F3F93 99.99%);
justify-content: space-between;
padding: 7px 20px;

.sm{
    display:initial;
}
.bg{
    display:none;
}

  }
`;
