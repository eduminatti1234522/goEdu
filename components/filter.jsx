import React,{useState} from "react";
import styles from "styled-components";

function Map() {
    const [selected,setSelected]=useState({});
  const data = [
    {
      title: "School type",
      opts: ["CBSE", "ICSE", "Boadring School", "Day School"],
    },
    {
      title: "Budget",
      opts: [
        "5 Lakhs  - 6 Lakhs",
        "6 Lakhs  - 7 Lakhs",
        "7 Lakhs  - 8 Lakhs",
        "8 Lakhs  - 9 Lakhs",
      ],
    },
    {
      title: "Rating",
      opts: ["dummy1", "dummy2", "dummy3", "dummy4"],
    },
  ];
  const selectFunc=(val,name)=>{
let temp={...selected};
temp[name]=val;
setSelected(temp);
  }
  return (
    <MainDiv>
      {data.map((val, index) => (
        <div key={index} className="sing">
          <h4>{val.title}</h4>
          <div className="optCont">
            {data[index].opts.map((vall, index) => (
              <div
              onClick={()=>selectFunc(vall,val.title)}
              className={(selected[val.title]==vall) ? "singOpt active" : "singOpt"} key={index}>
                <span>{vall}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainDiv>
  );
}

export default Map;

const MainDiv = styles.div`
background: rgba(214, 218, 232, 0.25);
box-shadow: 7px 8px 8px rgba(144, 151, 154, 0.8);
border-radius: 10px;
padding: 20px 15px;
h4{
    font-size:20px;
    color:black;
    text-align:left;
}
.sing{
    margin-bottom:30px;
    .optCont{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
        gap: 15px;
        font-size: 14px;
            margin-bottom: 20px;

    .singOpt{
        background: #FFFFFF;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color:black;
width:47%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
    }
    .singOpt.active{
        background: #29AEF9;
        color: white;
    }
}
}
`;
