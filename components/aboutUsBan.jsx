import React from 'react'
import styles from 'styled-components'

function sturc() {
    const data=[
        {
            num:"500+",
            text:"Schools",
        },
        {
            num:"200+",
            text:"Parents",
        },
        {
            num:"50+",
            text:"Counsellors",
        },
        {
            num:"10+",
            text:"Cities",
        },
    ]
  return (
    <MainCont>
        {
           data.map((val,index)=>
           <div className="sing" key={index}>
            <div className="iconCont">

            <span className="num">
{val.num}
            </span>
            <span className="text">{val.text}</span>
            </div>
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
    .num{
        font-size: 32px;
        margin-bottom: 20px;
    }
    .text{
        color: #2F3F93;
        font-size: 17px;
        margin-top: 17px;
        display: block;
        max-width:95%;
    }
    .iconCont{
        background: rgba(217, 217, 217, 0.98);
        box-shadow: inset 4px 4px 8px #121733;
        border-radius: 20px;
        width: 76%;
        aspect-ratio: 4/3;
        max-height: 161px;
        display: flex;
        justify-content: center;
        align-items: center;
    flex-direction: column;
    color: #2F3F93;
    }
`;