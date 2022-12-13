import React from 'react'
import styles from 'styled-components'
import { Link } from "react-router-dom";

function sturc() {
    const links=[
        {text:"Menu", url:""},
        {text:"Home", url:""},
        {text:"About us", url:""},
        {text:"Register School", url:""}
    ]
  return (
    <MainCont>
<div className="block1">
    <img src="/logo.png" alt="" />
    <div className="links">
        {
            links.map((val,index)=>
          <Link key={index} to={val.url}>{val.text}</Link>         
            )
        }
    </div>
</div>
<div className="block2">
    <p>Get the most reliable Boarding Schools Admission information and expert advisory from a range of 300 schools from 20 states and 100 cities listed on our website. Search, compare, analyse and select the best school for yourself.</p>
    <div className="block21">
        <span>Keep us updated</span>
        <input type="text" placeholder="youremailid@greatsite.com"/>
        <span><span>Submit</span></span>
        <span>@2022.explorebali.Allrightsreserved</span>
    </div>
</div>
<div className="block3">
    <h3>Contact us</h3>
    <p>Address: 903, Saeed tower, Shaeikh Zayed Road,
Dubai, UAE</p>
    <p>Tel: +62-36 739 299</p>
</div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`

`;