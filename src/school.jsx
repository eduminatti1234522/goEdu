import React, { useState,useEffect } from "react";
import styles from "styled-components";
import Search from "../components/searchCont";
import Socials from "../components/socialLinks";
import SideBar from "../components/topLeftSideBar";
import Info from "../components/schoolInfo";
import Testimonial from "../components/testimonial";
import Form from "../components/enquiryForm";
import { useParams } from 'react-router-dom';
import Funcs from './features/data'

function sturc() {
  const [switchh, setSwitchh] = useState(3);
  let { id,city } = useParams();
  const [school, setSchool] = useState();

  const schoolsFunc=async()=>{
    try{
  
      console.log("rresponse");
      console.log(id);
      let response= await Funcs?.getSchool(city,id).catch((err)=>console.log(err));
      // let response= await axios.get("http://localhost:3000/api/getAllData/dehraduns");
      console.log("rresponse11");
      console.log(response);
      setSchool(response || []);
      // if(response?.data?.length){
        // }
      }catch{
  
      }
  }
  useEffect(()=>{
    schoolsFunc();
    if(window.innerWidth<1000){
      setSwitchh(4);
    }
  },[])

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
        <div className="text">
          <p>{school?.name}</p>
          <div className="address">
            <img src="/blueLocation.svg" alt="" />
            <p>{school?.Address}</p>
          </div>
        </div>
        <span>SCHOLASHIPS</span>
      </div>
      <div className="btns btnsOuter2">
        <span>Check availability</span>
        <span onClick={()=>setSwitchh(1)}>Description</span>
        <span onClick={()=>setSwitchh(2)}>Facilities</span>
        <span  onClick={()=>setSwitchh(3)}>Review</span>
      </div>
      <span className="findSchools">FIND SCHOOLS</span>
      <section className="section2">
        <div className="block1">
          <Info />
        </div>
        <div className="block2">
          <div className="sm">
          <div className="text">
          <p>{school?.name}</p>
          <div className="address">
            <img src="/blueLocation.svg" alt="" />
            <p>{school?.Address}</p>
          </div>
        </div>
            <div className="form">
            <Form/>
            </div>
          </div>
          <div className="imgs">
            <img src="/schImg.jpg" alt="" />
            <img src="/schImg.jpg" alt="" />
            <img src="/schImg.jpg" alt="" />
            <img src="/schImg.jpg" alt="" />
          </div>
          {(switchh == 1 || switchh == 4) && (
            <div className="icons">
              {[...new Array(8)].map((_, index) => (
                <img key={index} src={`/Group ${498 + index}.png`} alt="" />
              ))}
            </div>
          )}
          {(switchh == 2 || switchh == 4) && (
            <div className="about">
              <span>ABOUT SCHOOL</span>
              <p>
                {school?.Long_Description}
              </p>
            </div>
          )}
          {(switchh == 3 || switchh == 4) && (
            <div className="reviews">
              <div className="reviewCard">
                <div className="block1">
                  <img src="/userIcon.png" alt="" />
                  <div className="nameStars">
                    <span>Ek Namoona</span>
                    <div className="stars">
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut eni.
                </p>
              </div>
              <div className="reviewCard">
                <div className="block1">
                  <img src="/userIcon.png" alt="" />
                  <div className="nameStars">
                    <span>Ek Namoona</span>
                    <div className="stars">
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut eni.
                </p>
              </div>
              <div className="reviewCard">
                <div className="block1">
                  <img src="/userIcon.png" alt="" />
                  <div className="nameStars">
                    <span>Ek Namoona</span>
                    <div className="stars">
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                      <img src="/star.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut eni.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Testimonial />
    </MainCont>
  );
}

export default sturc;

const MainCont = styles.div`
.sm{
  display:none;
}
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
    span:nth-child(even){
      background: #fff;
color:black;
border:2px solid #3e4d99;
// margin-left:6%;
    }
  }
  .btnsOuter{
    width:90%;
    margin:auto;
    display:flex;
    position:relative;
    margin: 50px 0;
    .text{
      color: #2F3F93;
      text-align: left;
      font-size: 18px;
      p{
        font-size: 23px;
        margin-bottom: 12px;
      }
      .address{
        display:flex;
        p{
          font-size: 13px;
          margin-bottom: 0px; 
        }
      }
      img{
        width:14px;
        height:auto;
        margin-right:10px;
      }
    }
  }
  .btnsOuter2{
    width:90%;
    margin:auto;
    display:flex;
    position:relative;
    margin: 50px 0;
   
  }
  .section2{
    display: flex;
    gap: 30px;
    padding:10 20px;
    .block2{
      flex: 1;
      max-width: 100vw;
      .reviews::-webkit-scrollbar {
        display: none;
      }
      .reviews{
        margin-top: 16px;
        width: 350px;
        color: #22221F;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        width: 97%;
        gap: 22px;
        margin-top: 30px;
        overflow:scroll;
        padding:0 20px;
        .reviewCard{
          padding: 30px 20px;
          background: #EEEFF6;
          border-radius: 12px;
          min-width:300px;
          .block1{
            display: flex;
            color: #2F3F93;
            gap: 20px;
            font-size: 16px;
            margin-bottom:30px;
            align-items:center;
            img{
              width: 60px;
              height: 60px;
            }
            .nameStars{
              .stars{
                display: flex;
img{
  width:16px;
  height:16px;
}
              }
            }
          }
        }
      }
      .imgs{
        display: flex;
        overflow: hidden;
        width: 90%;
        img{
          object-fit:cover;
          width:100%;
          aspect-ratio:9/5;
        }
      }
      .icons{
        display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 30px;
    justify-content: center;
      }
    }
    .about{
      margin-top: 35px;
span{
  color: #2F3F93;
    text-align: left;
    display: block;
} 
p{
  color: black;
  text-align: left;
  margin-top: 23px;
  font-size: 13px;
  max-width: 93%;
}
    }
  }
  @media(max-width:1000px){
    .sm{
      display:initial;
      .text{
        color: #2F3F93;
        text-align: left;
        font-size: 18px;
            max-width: 90%;
    margin: 20px auto;
        p{
          font-size: 23px;
          margin-bottom: 12px;
        }
        .address{
          display:flex;
          p{
            font-size: 13px;
            margin-bottom: 0px; 
          }
        }
        img{
          width:14px;
          height:auto;
          margin-right:10px;
        }
      }
      .form{
        padding:15px;
        width:95%;
        margin:25px auto;
        max-width:400px;
        background: rgba(214, 218, 232, 0.25);
box-shadow: 2px 2px 14px 3px #90979A;
border-radius: 20px;  

}
    }
    .icons{
      gap: 4% !important;
    padding: 10px;
      img{
        width:30%;
margin-bottom:20px;
max-width:120px;
      }
    }
    .about{
      width: 95%;
      margin: 40px auto;
      span, p{
        text-align:center !important;
        margin:0px !important;
        max-width: 100% !important;
      }
    }
    .btns{
        display:flex;
    }
    .btnsOuter{
      display:none;
    }
    .btnsOuter2{
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
      .section2{
        .block1{
          display:none;
        }
      }
}
`;
