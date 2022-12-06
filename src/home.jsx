import React from "react";
import SideBar from "../components/topLeftSideBar";
import Socials from "../components/socialLinks";
import Search from "../components/searchCont";
import FeatureCard from "../components/featureCard";
import CitySlider from "../components/citySlider";
import styles from "styled-components";

function Home() {
  const features=[
    {
      title:"Explore School",
      para:"Refer to our school listing and explore schools from all parts of India."
    },
    {
      title:"Get Expert Advice",
      para:"Help yourself with our specialized assistance offered by us as a consultancy service."
    },
    {
      title:"Write a Review",
      para:"Write reviews on schools here to guide other parents or students like you."
    },
    {
      title:"All School Details",
      para:"Know about minute details & facilities of each school from our thoroughly curated listing."
    },
    {
      title:"Free Counselling",
      para:"Get access to free counselling service for your kids to clear their queries."
    },
    {
      title:"Register Your School",
      para:"Register your institution with us to get a better visibility through our listing."
    },
  ];
  return (
    <MainCont>
      <section className="section1">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="innerDiv">
        <h1>Find the Best School in Seconds</h1>
        <div className="search">
        <Search/>
        </div>
        </div>
        <Socials/>
        <img className="mainImgg" src="/mainTopImg.png" alt="" />
      </section>
      <section className="section2">
        <div className="innerContainer">
   {features.map((val,index)=>
    <FeatureCard key={index} data={val} id={index+1}/>
   )}  
   </div>
      </section>
      <section className="section3">
      <CitySlider/>
      </section>
    </MainCont>
  );
}

export default Home;

const MainCont = styles.div`
.section1{
    position: relative;   
    width:100vw;
    height:70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .sideBar{
      display:none;
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
  .section2{
background:rgba(217,217,217,0.98);
padding-top:50px;
    .innerContainer{
      display: flex;
      overflow-x: scroll;
    }
    .innerContainer::-webkit-scrollbar {
      display: none;
    }
    
    .innerContainer {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }
  @media(min-width:700px){
    .sideBar{
      position:absolute;
      height:100%;
      z-index:99;
      display:initial !important;
      left:0;
      top:0;
  }
  .section2{
        .innerContainer{
          border-radius:20px;
        }
      }
  }
  @media(max-width:800px){
  .section1{
    .innerDiv{
h1{
  text-align:left;
  max-width:300px;
  line-height:60px;
}
    }
    .search{
      position: absolute;
      bottom: -7px;
    }
  }
  }
`;
