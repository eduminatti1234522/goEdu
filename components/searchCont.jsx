import React from "react";
import styles from "styled-components";

function sturc() {
  return (
    <MainCont>
      <div className="sing">
        <span>School type </span>
        <input placeholder={"type of school"} type="text" />
      </div>
      <div className="sing">
        <span>Location</span>
        <input placeholder={"Location"} type="text" />
      </div>
      <input type="submit" value="Search" className="submit" />
    </MainCont>
  );
}

export default sturc;

const MainCont = styles.div`
display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: end;
    padding: 20px 15px;
    background: rgba(255, 255, 255, 0.17);
box-shadow: 0px 0px 10px 1px #1F001B;
border-radius: 15px;
max-width:80%;
margin:auto;
.sing{
    display: flex;
    flex-direction: column;
    width:35%;
    span{
        text-align: initial;
    }
    input{
        width:100%;
background:white;
height:40px;
border: none;
border-radius: 7px;
color:gray;
text-align: initial;
padding-left: 5px;
padding-bottom: 0px;
    }
}
::placeholder {
    color: gray;
    opacity: 0.8;
  }
  
  :-ms-input-placeholder { 
   color: gray;
   opacity: 0.8;

  }
  
  ::-ms-input-placeholder { 
   color: gray;
   opacity: 0.8;
  }
.submit{
    background: #29AEF9;
    border: none;
    border-radius: 7px;
    width: 20%;
    height:40px;
}
@media(max-width: 700px){
    .sing{
      span{
        font-size: 13px;
    }
        input{
            width:100%;
    height:25px;
    font-size:12px;
        }
    }
    .submit{
        height:25px;
    }
}
`;
