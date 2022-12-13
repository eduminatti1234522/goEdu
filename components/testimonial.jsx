import React from 'react'
import styles from 'styled-components'
import Sing from './singTesi'
import Slider from "react-slick";

function sturc() {
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows:false,
    nextArrow: <img className="arrow right" src="../src/assets/icons/rightIcon.svg" alt="" />,
    prevArrow: <img className="arrow left" src="../src/assets/icons/leftIcon.svg" alt="" />,
    responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true
        //   }
        // },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
      ]
  };
  const cities = [{}, {}, {}, {}, {}];
  return (
    <MainCont>
      <div className="mainCont">
        <h2>TESTIMONIALS</h2>
        <Slider
        {...settings}
      >
        {cities.map((val, index) => (
          <div className="sing" key={index}>
          <Sing />
          </div>
        ))}
      </Slider>
      </div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
background: #3E4D99;
padding-bottom: 40px;
h2{
  color:white;
  margin-bottom:10px;
}
.slick-track{
  display:flex;
}
.arrow{
  position:absolute;
  z-index: 999;
}
.right{
  top:50%;
  right:0%;
}
.left{
  top:50%;
  left:0%;
}
.sing{
width:100vw;
}
`;