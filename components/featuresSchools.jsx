import React from 'react'
import styles from 'styled-components'
import FeaCard from './cityCard'
import Btn from './btn'

function sturc() {
  return (
    <MainCont>
        <h2>FEATURED SCHOOLS</h2>
     <div className="slider">
       {
        [...new Array(3)].map((val,index)=>
        <div key={index} className="sing">
<FeaCard/>
        </div>
        )
       } 
       </div>
       <div className="btn">
       <Btn text={"Explore"}/>
       </div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
.slider{
    display:flex;
    justify-content:space-around;
    overflow-x: scroll;
    gap:30px;
    .sing{
        min-width: 300px;
        width:27%;
    }
}
.slider::-webkit-scrollbar {
    display: none;
  }
  
  .slider {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
.btn{
    width:200px;
    margin:30px auto;
}
@media(max-width: 1000px){
    .slider{
        all: unset;
        display: flex;
        overflow-x: scroll;
        margin-left: 23px;
    }
    .sing{
        width:80% !important;
        max-width:250px !important;
        min-width:250px !important;
        margin-right:5%;
    }
}
`;