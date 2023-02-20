import React from "react";
import styles from "styled-components";
import FeaCard from "./cityCard";
import Btn from "./btn";

const FeatureSchool = [
  {
    school: "JIRS",
    img: "https://content3.jdmagicbox.com/comp/bilaspur-chhattisgarh/q7/9999p7752.7752.091120123808.g6q7/catalogue/the-jain-international-school-sakri-bilaspur-chhattisgarh-schools-1y8vtzu.jpg",
  },
  {
    school: "Asian School",
    img: "https://content3.jdmagicbox.com/comp/dehradun/y6/9999px135.x135.121009132714.a2y6/catalogue/the-asian-school-dehradun-city-dehradun-schools-2jbi0a0.png",
  },
  {
    school: "Doon Public School",
    img: " https://www.doonschool.com/wp-content/uploads/2019/08/24173858_2234362349914822_8661319849927400643_o.jpg",
  },
  {
    school: " Welham Girls School",
    img: "https://www.roundsquare.org/wp-content/uploads/2019/10/Welham-Girls%E2%80%99-School-1200x800.jpg",
  },
];

function sturc() {
  return (
    <MainCont>
      <h2>FEATURED SCHOOLS</h2>
      <div className="slider">
        {FeatureSchool.map((val, index) => (
          <div key={index} className="sing">
            <FeaCard name={val.school} url={val.img}/>
          </div>
        ))}
      </div>
      <div className="btn">
        <Btn text={"Explore"} />
      </div>
    </MainCont>
  );
}

export default sturc;

const MainCont = styles.div`
.slider{
    display:flex;
    justify-content:space-around;
    overflow-x: scroll;
    gap:30px;
    .sing{
        min-width: 300px;
        width:27%;
    }
}
.slider::-webkit-scrollbar {
    display: none;
  }
  
  .slider {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
.btn{
    width:200px;
    margin:30px auto;
}
@media(max-width: 1000px){
    .slider{
        all: unset;
        display: flex;
        overflow-x: scroll;
        margin-left: 23px;
    }
    .sing{
        width:80% !important;
        max-width:250px !important;
        min-width:250px !important;
        margin-right:5%;
    }
}
`;
