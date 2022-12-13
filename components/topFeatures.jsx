import React from 'react'
import styles from 'styled-components'

function sturc() {
    const data=[
        {
            text:"Compare Schools",
        },
        {
            text:"Common Application",
        },
        {
            text:"Expert Counselling",
        },
        {
            text:"Expert Counselling",
        },
    ]
  return (
    <MainCont>
        {
           data.map((val,index)=>
           <div className="sing" key={index}>
            <div className="iconCont">

            <span>
                <img src={`../src/assets/topFeatures/fea${index +1}.png`} alt="" />
            </span>
            </div>
            <span className="text">{val.text}</span>
           </div>
           ) 
        }
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
display: flex;
    justify-content: space-between;
    padding: 0 30px;
    gap: 25px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
      }
      
      & {
        -ms-overflow-style: none; 
        scrollbar-width: none; 
      }
    .sing{
        width: 18%;
        min-width: 190px;
    }
    .text{
        color: #2F3F93;
        font-size: 20px;
        margin-top: 17px;
        display: block;
        max-width:95%;
    }
    .iconCont{
        margin:auto;
        background: rgba(217, 217, 217, 0.98);
        box-shadow: inset 4px 4px 8px #121733;
        border-radius: 20px;
        width: 100%;
        aspect-ratio: 4/3;
        max-height: 161px;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    border: 4px solid #2F3F93;
        }
        img{
            width: 50px;
            height: 50px;
        }
    }
`;