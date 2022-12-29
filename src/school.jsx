import React from 'react'
import styles from 'styled-components'
import Search from "../components/searchCont";
import Socials from "../components/socialLinks";
import SideBar from "../components/topLeftSideBar";

function sturc() {
  return (
    <MainCont>
         <section className="section1">
        <div className="sideBar bg">
         <SideBar />
        </div>
        <div className="innerDiv">
        <div className="btns">
          <span>FIND SCHOOLS</span>
          <span>SCHOLASHIPS</span>
        </div>
        <div className="search">
        <Search/>
        </div>
        </div>
        <div className="socials sm">
        <Socials/>
        </div>
        <img className="mainImgg" src="/mainTopImg.png" alt="" />
      </section>
      <div className="btns btnsOuter">
          <span>FIND SCHOOLS</span>
          <span>SCHOLASHIPS</span>
        </div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
.section1{
    position: relative;   
    width:100vw;
    height:350px;
    display: flex;
    justify-content: center;
    align-items: center;
    .sideBar{
      position:absolute;
      height:100%;
      z-index:99;
      display:initial;
      left:0;
      top:0;
  }
    .mainImgg{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      object-fit: cover;
    }
  .innerDiv{
    z-index:99;
  }
  }
  .sm{
    display:none;
  }
  .bg{
    display:initial ;
  }
  .btns{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    display:none;
    justify-content:space-between;
    span{
      display:block;
      background: #3e4d99;
    // padding: 13px 20px;
    // width:45%;
    border-radius: 10px;
    margin-right: 20px;
    width: 219px;
    max-width: 47%;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    margin:0;
    }
    span:nth-child(2){
      background: #fff;
color:black;
border:2px solid #3e4d99;
margin-left:6%;
    }
  }
  .btnsOuter{
    width:90%;
    margin:auto;
    display:flex;
    position:relative;
    margin: 50px 0;
  }
  @media(max-width:1000px){
    .btns{
        display:flex;
    }
    .btnsOuter{
      display:none;
    }
    .section1{
        height:70vh;
      }
     .sm{
      display:initial;
    }
    .sideBar, .btnsOuter{
        display:none !important;
      }
      .search{
        position: absolute;
        bottom: -12px;
        left: 50%;
      transform: translateX(-50%);
      width: 350px;
      }
}
`;