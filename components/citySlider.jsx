import React from "react";
import styles from "styled-components";
// import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";
import Slider from "react-slick";

function sturc() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows:false,
        rows:1,
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
      <h2>Center Mode</h2>

      <Slider
        {...settings}
      >
        {cities.map((val, index) => (
          <div key={index} className="singCity">
            <img src="../src/assets/cities/city1.jpg" alt="" />
            <h4>DUBAI</h4>
          </div>
        ))}
      </Slider>
      {/* <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
    </MainCont>
  );
}

export default sturc;

const MainCont = styles.div`
.singCity{
    background: #FFFFFF;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
border-radius: 15px;
width:23%;
min-width:200px;
img{
    width:100%;
    aspect-ratio:4/3;
}
h4{
    color:black;
    margin:20px auto 30px auto;
}
}
`;
