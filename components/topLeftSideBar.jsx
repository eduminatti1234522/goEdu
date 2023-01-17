import React from 'react'
import styles from 'styled-components'
import { Link } from "react-router-dom";

function sturc() {
  return (
    <MainCont>
           <Link to="/">
        <img className="logo" src="/logo.png" alt="" />
          </Link>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
background: linear-gradient(90deg, rgba(47, 63, 147, 0.7) -24.26%, rgba(2, 10, 49, 0.7) 41.34%, rgba(47, 63, 147, 0.7) 106.93%);
width:15vw;
height:100%;
display:flex;
justify-content:center;
align-items:center;
max-width: 140px;
a{
    width:80%;
    height:auto;
    .logo{
      width:100%;
      height:auto;
    }
}
`;