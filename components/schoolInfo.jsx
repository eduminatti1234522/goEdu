import React from "react";
import styles from "styled-components";

function SchoolInfo() {
  const opts = ["CBSE", "ICSE", "Boarding School", "Day School"];
  const details=["Grade", "Admission", "Address", "Founding year", "Chairman Name", "Principal Name"];
  const detailAns=["FS1 to Grade 12", "1st - 12th", "Al warqa 1, UAE", "2008", "", "Ms Arundati Rawat"];
  const statics=["Infrastructure","Placements","Academics","Extra - Curriculars"]
  return (
    <MainCont>
          <span className="btnn">Give a call</span>

      <span className="mainTitle">Search by Maps</span>
      <div className="type">
        <span className="title">School type</span>
        <div className="opts">
          {opts.map((val, index) => (
            <span key={index}>{val}</span>
          ))}
        </div>
      </div>
      <div className="rating">
        <span className="title">Ratings</span>
        <div className="stars">
          {[...new Array(5)].map((_, i) => (
            <img key={i} src="../src/assets/icons/star.svg" alt="" />
          ))}
        </div>
      </div>
      <div className="details">
        <span className="mainTitle">Search by Maps</span>
        <div className="detailsInfo">
            {
                details.map((val,index)=>
                <div key={index} className="sing">
                    <span>{val}</span>
                    <span>: {detailAns[index]}</span>
                </div>
                )
            }
        </div>
      </div>
      <div className="statics">
        <span className="mainTitle">Statics</span>
      {
statics.map((val,index)=>
<div key={index} className="sing">
<span className="infoSing">{val}</span>
<div className="barText">
    <div className="bar">
        <div className="barInner"></div>
    </div>
    <span>91 %</span>
</div>
</div>
)
      }
      </div>
    </MainCont>
  );
}

export default SchoolInfo;

const MainCont = styles.div`
color:black;
width:350px;
display:flex;
flex-direction:column;
padding:20px;
.mainTitle{
color:#3E4D99;
font-size:20px;
text-align:left;
display:block;
margin-top:30px;
margin-bottom:15px;
}
.title{
    display: block;
  text-align:left;
margin-top:20px;
margin-bottom:20px;
}
.opts{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    // justify-content:space-between;
span{
    font-size:12px;
    flex:1;
    display:inline-block;
    min-width:40%;
    line-height:40px;
    background: #FFFFFF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
span:nth-child(1){
    background: #29AEF9;
color:white;
}
}
.stars{
    background: #FFFFFF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:35px;
    width:60%;
    img{
        width:16px;
        height:16px;
    }  
}
.details{
    .detailsInfo{
        font-size: 13px;
        margin-top: 25px;
        .sing{
            display: flex;
            justify-content: space-between;
            span{
                flex:1;
                text-align:left;
            }
            margin-bottom:10px;
        }
    }
}
.statics{
    .sing{
        display: flex;
        gap: 15px;
        font-size:12px;
        margin-bottom:15px;
        .infoSing{
            flex: 1;
            text-align:left;
        }
        .barText{
            flex: 2;
        }
        .barText{
            display: flex;
            gap:10px;
.bar{
    flex:1;
    height:20px;
    background:#D9D9D9;
    postion:relative;
    .barInner{
        width:91%;
        height:100%;
        background:#3E4D99;
    }
}

        }
    }
}
.btnn{
        display:block;
        background: #3e4d99;
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
      color:white;
}
`;
