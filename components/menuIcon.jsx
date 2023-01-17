import React from 'react'
import styles from 'styled-components'

function sturc() {
  return (
    <MainCont>
        <span></span><span></span><span></span>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
border-radius:12px;
border:2px solid white;
padding: 10px 9px;
display:flex;
flex-direction:column;
justify-content:center;
gap:7px;
width:30px;
width: 50px;
span{
    background:white;
    width:100%;
    display:block;
    margin: auto;
    height:2px;
    border-radius:8px;
}
span:nth-child(2){
    width:75%;
}
`;