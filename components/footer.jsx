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
    <div className="logoCont">
    <img src="/logo.png" alt="" />
    </div>
    <p className='sm'>Get the most reliable Boarding Schools Admission information and expert advisory from a range of 300 schools from 20 states and 100 cities listed on our website. Search, compare, analyse and select the best school for yourself.</p>

    <div className="links">
        {
            links.map((val,index)=>
          <Link key={index} to={val.url}>{val.text}</Link>         
            )
        }
    </div>
</div>
<div className="block2">
    <p className='bg'>Get the most reliable Boarding Schools Admission information and expert advisory from a range of 300 schools from 20 states and 100 cities listed on our website. Search, compare, analyse and select the best school for yourself.</p>
    <div className="block21">
        <span className='updated'>Keep us updated</span>
        <input type="text" placeholder="youremailid@greatsite.com"/>
        <span className='submit'><span>Submit</span></span>
        <span className='mark bg'>@2022.explorebali.Allrightsreserved</span>
    </div>
</div>
<div className="block3">
    <h3>Contact us</h3>
    <p>Address: 903, Saeed tower, Shaeikh Zayed Road,
Dubai, UAE</p>
    <p>Tel: +62-36 739 299</p>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6888.673430950683!2d78.04966312477076!3d30.31293888916962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b045cc25b1%3A0xcdb3dadf017e49cf!2sPanchpuri%20Colony%2C%20Dalanwala%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1671690954076!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
<span style={{color:"#EAFB81", fontSize:"11px", marginTop:"27px", marginBottom:"30px"}} className='mark sm'>@2022.explorebali.Allrightsreserved</span>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
background: #3e4d99;
display: flex;
padding: 10px 25px;
justify-content:space-between;
.sm{
    display:none;
}
.bg{
    display:initial;
}
.block1{
    width: 15%;
    align-items: baseline;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    border-right: 2px solid white;
img{
    width: 70%; 
    margin-bottom:20px;
    max-width: 140px;
}
a{
    color: #EAFB81;
}
.links{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 12px;
}
}
.block2{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    border-right: 2px solid white;
    p{
        width: 37%;
        font-size: 13px;
        line-height: 19px;
        font-weight: 100;
    }
    .block21{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 75%;
        justify-content: space-between;
        align-items: baseline;
        align-items: end;
        .updated{
            font-size: 14px;
            font-weight: 100;
            margin-top: 15px;
            width: 100%;
            text-align: initial;
        }
        input{
            background: white;
    padding: 10px;
    box-shadow: inset 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 7px;
    border: none;
    width: 87%;
    margin-right: 5%;
        }
        .submit{
            background: #29AEF9;
            border-radius: 18px;
            padding: 6px 15px;
            font-size: 11px;
            width: 36%;
        }
      
    }
}
.mark{
    font-size: 12px;
    width: 100%;
}
.block3{
    width: 30%;
    color: #EAFB81;
    font-size: 12px;
    text-align: left;
    .map{
        width: 100%;
        height: 156px;
        position: relative;
        margin: auto;
        margin-top:20px;
        iframe{
            border: 0px;
            width: 100%;
            height: 100%;
        }
    }
}
@media(max-width:1100px){
    flex-direction: column;
    align-items: center;
    .sm{
        display:initial;
    }
    .bg{
        display:none;
    }
.block1, .block2, .block3{
    border: 0px;
    width:95%;
    margin:auto;
    max-width:500px;
}
.block1{
    padding:0;
    width:95%;
    .logoCont{
        width:80%;
        margin:auto;
        border-bottom: 2px solid white
    }
    img{
     margin: auto;
    }
    .links{
        flex-direction:row;
        justify-content:space-between;
        width: 90%;
    margin: auto;
    margin-top: 27px;
    font-size: 14px;
    min-width: 293px;
    }
 }
 .block2{
    min-height: 230px;
    width: 95%;
    .block21{
        height: 186px;
        width: 100%;
        max-width: 351px;
        input{
            aspect-ratio: 13/1;
        }
    }
 }
}
`;