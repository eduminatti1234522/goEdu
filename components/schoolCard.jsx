import React from "react";
import Styles from "styled-components";
import { Link } from "react-router-dom";

function SchoolCard({ data,city }) {
  const fea = [
    {
      title: "Established",
      val: "1975",
    },
    {
      title: "Board",
      val: "CBSE",
    },
    {
      title: "Category",
      val: "Girls",
    },
    {
      title: "Type",
      val: "Day Boarding",
    },
    {
      title: "Grade Upto",
      val: "KG To 12",
    },
  ];
  const ratings = [
    {
      title: "Infrastructure",
      val: 70,
    },
    {
      title: "Placements",
      val: 40,
    },
    {
      title: "Academics",
      val: 80,
    },
    {
      title: "Extra-curriculars",
      val: 60,
    },
  ];
  return (
    <MainDiv>
      <div className="blockk1">
        <img className="mainImg" src="/contactImg2.jpg" alt="" />
        <div className="block12">
          <img src="/contactImg2.jpg" alt="" />
          <img src="/contactImg2.jpg" alt="" />
          <img src="/contactImg2.jpg" alt="" />
        </div>
      </div>
      <div className="blockk2">
        <div className="blockk21">
          <div className="bl1">
            <h4>{data?.name}</h4>
            <div className="rating">
              <div className="stars">
                {[...new Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={`../src/assets/icons/${
                      index + 1 > 4.5 && index < 4.5 ? "halfStar" : "star"
                    }.svg`}
                    alt=""
                  />
                ))}
              </div>
              <span className={"bg"}>based on 27 reviews</span>
            </div>
          </div>
          <span className="ann bg">Annual Fees (in INR)</span>
          <span className="price bg">
            {data?.feefrom} to {data?.feeto}
          </span>
          <div className="address">
            <img src="../src/assets/icons/location.svg" alt="" />
            <address> {data?.Address}</address>
          </div>
        </div>
        <div className="blockk22">
          <div className="feature">
            {/* {fea.map((val, index) => ( */}
            <div className="sing">
              <img src={`../src/assets/schFea1.png`} alt="" />
              <span className="title">Established</span>
              <span className="val">{data?.establishment}</span>
            </div>
            <div className="sing">
              <img src={`../src/assets/schFea1.png`} alt="" />
              <span className="title">Board</span>
              <span className="val">{data?.establishment}</span>
            </div>
            <div className="sing">
              <img src={`../src/assets/schFea3.png`} alt="" />
              <span className="title">Category</span>
              <span className="val">{data?.establishment}</span>
            </div>
            <div className="sing">
              <img src={`../src/assets/schFea4.png`} alt="" />
              <span className="title">Type</span>
              <span className="val">{data?.establishment}</span>
            </div>
            <div className="sing">
              <img src={`../src/assets/schFea5.png`} alt="" />
              <span className="title">Grade Upto</span>
              <span className="val">
                {data?.classfrom} to {data?.classto}
              </span>
            </div>
            {/* ))} */}
          </div>
          <div className="raBtns">
            <div className="ra">
              {ratings.map((val, index) => (
                <div key={index} className="sing">
                  <span className="title">{val.title}</span>
                  <span className="bar">
                    <span style={{ width: val.val + "%" }}></span>
                  </span>
                  <span className="per">{val.val + "%"}</span>
                </div>
              ))}
            </div>
            <div className="priceCont">
              <span className="ann sm">Annual Fees (in INR)</span>
              <span className="price sm">
                {data?.feefrom} to {data?.feeto}
              </span>
            </div>
            <div className="btnss">
              <span>
          <Link to={`/school/${city}/${data?._id}`}>
                VIEW SCHOOL
                </Link>
                </span>
              <span>CALL NOW</span>
            </div>
          </div>
        </div>
      </div>
    </MainDiv>
  );
}

export default SchoolCard;

const MainDiv = Styles.div`
display: flex;
justify-content: space-between;
background: #FFFFFF;
border: 1px solid rgba(61, 137, 186, 0.25);
box-shadow: 0px 4px 4px rgba(61, 137, 186, 0.25);
border-radius: 10px;
padding:10px;
padding-right: 17px;
margin-bottom:40px;
.priceCont{
  display:none;
}
.bg{
    display:block;
}
.sm{
    display:none;
}
.mainImg{
    width:100%;
    height: 65%;
    object-fit: cover;
}
.blockk1{
    width:35%;
    background:white;
    z-index:99;
}
.block12{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:30%;
    img{
        width:32%;
       height:100%;
       object-fit: cover;
    }
}
.blockk2{
    width:63%;
    .bl1{
        display: flex;
    justify-content: space-between;
    color: black;
    font-weight: 100;
    text-align: left;
    align-items: baseline;
    h4{
        font-size: 14px;
        width: 60%;
        margin-top:0;
        margin-bottom:0px;
    }
    .rating, .stars{
        display: flex;
        align-items: center;
        gap:10;
        img{
            width:12px;
            height:12px;
        }
        span{
            font-size: 10px;
            color: #0074AD;
        }
    }
    }
    .ann{
        color: #596574;
    font-size: 12px;
    opacity: 0.8;
    display: block;
    text-align: left;
    }
    .price{
        color: #2F3F93;
    font-size: 18px;
    display: block;
    text-align: left;
    }
    .address{
        margin-top:10px;
        display: flex;
        align-items:top;
        img{
            height:15px;
            margin-top:6px;
        }
        address{
            color:#AEAEAE;
            margin-left:4px;
    font-size: 12px;
    text-align:left;
        }
    }
    .feature{
        display: flex;
        justify-content: space-between;
        .sing{
         
            img{
                width: 30px;
            }
            span{
                color: #AEAEAE;
                font-size: 11px;
                text-align: center;
                display: block;
                line-height: 15px;

            }
    span:nth-child(3){
color:#2F3F93;
    }
        }
    }
    .raBtns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .ra{
            width: 65%;
            margin-top:15px;
            .sing{
                display: flex;
                justify-content: space-between;
                .title{
                    color:#AEAEAE;
                    font-size: 10px;
                    text-align:left;
                    width:120px;
                }
            }
            .bar{
                width: 70%;
    height: 4px;
    background: #aeaec0;
    display: block;
    margin-top: 10px;
    border-radius: 10px;
    position:relative;
    span{
        height:100%;
    border-radius: 10px;
background:#FF7900;
position:absolute;
left:0;
top:0;
display:block;
    }
            }
        }
        .per{
            color:#AEAEAE;
            font-size: 10px;
            margin-left:10px;
            width:30px;
        }
    }
    .btnss{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        gap: 10px;
        width: 25%;
        span{
            display:block;
                color:#2F3F93;
            border:1px solid #2F3F93;
            border-radius:17px;
            height: 50%;
    width: 100%;
    font-size: 14px;
    padding: 7px 0;
    a{
      color:#2F3F93;
    }
        }
        span:nth-child(2){
            background:#2F3F93;
            color:white;
        }
    }
}
@media(max-width:1000px){
    flex-direction: column;
    border: 0px;
box-shadow: none;
padding:0;
    .bg{
        display:none;
    }
    .sm{
        display:block;
    }
.blockk1{
    width: 85%;
    margin: auto;
}
.blockk2{
    width: 100%;
    .blockk21{
        border: 2px solid #3e4d99;
        padding: 7px;
        border-radius: 9px;
        transform: translateY(-8px);
        width:90%;
        margin:auto;
        .bl1{
            margin-top:15px;

            h4{
                font-size: 11px;
                width:80%;
            }
        }
        address{
            font-size: 10px;
        }
    }
    .raBtns{
    flex-wrap:wrap;
    .ra{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        .sing{
            width: 49%;
            .title{
                width:60%;
                font-size:9px;
            }
            .bar{
                width:35%;
            }
        }
    }
    .btnss{
        width:40%;
    margin-top:15px;
        span{
            padding: 5px 0;
    font-size: 13px;
        }
    }
    .priceCont{
      display:initial;
    margin-top:15px;
       width:50%; 
       .price{
font-size:14px;
       }
    }
    }
}
.blockk22{
    border: 2px solid #3e4d99;
    padding: 7px;
    border-radius: 9px;
    transform: translateY(-11px); 
    padding:15px 7px;
}
}
`;
