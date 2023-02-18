import React from "react";
import styles from "styled-components";
import SideBar from "../components/topLeftSideBar";
import Search from "../components/searchCont";
import Socials from "../components/socialLinks";
import Testimonial from "../components/testimonial";

function AboutUs() {
  const features = [
    {
      img: "/setting.png",
      text: "All you need to start",
      para: "Get access to all resources from school listings to admission guidance and consultancy.",
    },
    {
      img: "/tool.png",
      text: "Costumize and Extend",
      para: "Customize and expand your education as well as career plan with clear guidance.",
    },
    {
      img: "/setting.png",
      text: "Active Community",
      para: "Get introduced to the big community of the educational and the industrial sector.",
    },
  ];
  return (
    <MainDiv>
      <section className="section1">
        <div className="sideBar bg">
          <SideBar />
        </div>
        <div className="innerDiv">
          <div className="btns">
            <span>FIND SCHOOLS</span>
            <span>SCHOLARSHIPS</span>
          </div>
          <div className="search">
            <Search />
          </div>
        </div>
        <div className="socials sm">
          <Socials />
        </div>
        <img className="mainImgg" src="/mainTopImg.png" alt="" />
      </section>
      <div className="btns btnsOuter">
        <span>FIND SCHOOLS</span>
        <span>SCHOLARSHIPS</span>
      </div>
      <img className="mainImgg" src="/aboutImg.jpg" alt="" />
      <section className="section2">
        <p className="para">
          In this time and era, education has become a valuable commodity. It is
          impossible to imagine a fruitful and satisfying life without
          schooling. However, with so many choices, resources, and facilities
          offered, choosing the best choice has become a huge challenge. <br />
          <br />
          Educational Consultancy has a major impact to simplify this hunt. With
          the help of a team of knowledgeable Education Consultants, we at Edu
          My Nation aspire to make education affordable, advantageous,
          intelligent, successful, enjoyable, and life-changing to everyone. We
          collaborate with our experts to solve educational issues and problems
          faced by the students, parents/ guardian, educators, and even
          institutions, easing the way for a better and more prosperous future.
        </p>
      </section>
      <section className="section3">
        {features.map((val, index) => (
          <div className="sing" key={index}>
            <img src={val.img} alt="" />
            <h3>{val.text}</h3>
            <p>{val.para}</p>
          </div>
        ))}
      </section>
      <section className="section4">
        <div className="block1">
          <img src="/mainTopImg.png" alt="" />
          <div className="Text">
            <h4 className="title">A brief description about EduMyNation</h4>
            <p className="para">
              We are a listing website for various educational institutions
              including schools & colleges from all over India. We also provide
              the child-concerned parents of India with admission guidance and
              consultancy services.
            </p>
          </div>
        </div>
        <div className="block2">
          <img src="/mainTopImg.png" alt="" />
          <div className="Text">
            <h4 className="title">A brief description about EduMyNation</h4>
            <p className="para">
              We are a listing website for various educational institutions
              including schools & colleges from all over India. We also provide
              the child-concerned parents of India with admission guidance and
              consultancy services.
            </p>
          </div>
        </div>
      </section>
      <Testimonial/>
    </MainDiv>
  );
}

export default AboutUs;

const MainDiv = styles.div`
.mainImgg{
    width:100%;
    object-fit: cover;
  }
.section1{
    position: relative;   
    width:100vw;
    height:450px;
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
      width: 100vw;
      object-fit: cover;
    }
  .innerDiv{
    z-index:99;
  }
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
  .sm{
    display:none;
  }
  .bg{
    display:initial ;
  }
  .section2{
    .para{
        color: black;
        width: 90%;
        margin: 30px auto;
        font-size: 14px;
    }
  }
  .section3{
    display: flex;
    justify-content: space-between;
    padding: 15px;
    width: 97vw;
    flex-wrap: wrap;
    gap:22px;
   
    .sing{
        flex:1;
        // width:33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 300px;
        max-width:350px;
        margin-bottom:40px;
        img{
            width: 70px;
            height: 70px;
        }
        h3{
        color:#3E4D99;
        font-size: 15px;
        }
        p{
            font-size: 12px;
            color: black;
            margin-top: 0;
            max-width:80%;
            min-width: 266px;
        }
    }
  }
  .section4{
    .block2{
        flex-direction: row-reverse;
    }
    .block1, .block2{
        display:flex;
        gap:20px;
        padding: 40px;
.Text{
    padding:10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
        color: #3E4D99;
        font-size: 18px; 
    }
    p{
        color: black;
        font-size: 14px;  
    }
}
    }
    img{
        min-width: 320px;
        width: 50%;
        aspect-ratio: 6/4;
    }
  }
  @media(max-width:1000px){
    .section4{
        .block1, .block2{
            flex-direction: column;
            align-items: center;
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
        bottom: -12px;
        left: 50%;
      transform: translateX(-50%);
      width: 350px;
      }
    }
    }
@media(max-width:700px){
        .sm{
            display:initial;
          }
         .sideBar, .bg{
            display:none;
          }
         .sideBar{
            display:none !important;
          }
    }
`;
