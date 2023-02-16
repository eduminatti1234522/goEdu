

import React from "react";
import styles from "styled-components";
// import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";
import Slider from "react-slick";
import Btn from './btn'
import { Link } from "react-router-dom";

function sturc() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows:false,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  // const params = {
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'bullets',
  //       clickable: true
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev'
  //     },
  //     spaceBetween: 30
  //   }
  const cities = [{}, {}, {}, {}, {}];
  return (
    <MainCont>
      <h2>SCHOOLS BY CITIES</h2>

      <Slider
        {...settings}
      >
        {cities.map((val, index) => (
          <div key={index} className="outerSingCity">
            <Link to="/category/dehradun/boarding">
          <div className="singCity">
            <img src="../public/images/cities/city1.jpg" alt="" />
            <h4>DUBAI</h4>
          </div>
        </Link>
          </div>
        ))}
        
      </Slider>
      <div className="btn">
       <Btn text={"Explore"}/>
       </div>
    </MainCont>
  );
}

export default sturc;

const MainCont = styles.div`
// h3, div{
//     color:blue;
//     background:red
// }
.slick-track{
    display:flex;
}
// .outerSingCity{
//     padding:0 15px;
// }
.singCity{
    background: #FFFFFF;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
border-radius: 15px;
width: 97%;
min-width:200px;

img{
    width:100%;
    aspect-ratio:4/3;
}
h4{
    color:black;
    margin:20px auto 30px auto;
    padding-bottom: 8px;
    font-weight: 700;
}
}
.slick-slide{
    .singCity{
        transform:scale(0.8);
    }
    img{
        opacity:0.8;
    }
}
.slick-center{
    .singCity{
        transform:scale(1);
    }
    img{
        opacity:1;
    }
}
.btn{
    width:200px;
    margin:30px auto;
}
`;
