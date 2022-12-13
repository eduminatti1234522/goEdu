import React from 'react'
import styles from 'styled-components'

function sturc({text}) {
  return (
    <MainCont>
<span className="btn">
    {text}
</span>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
width: 100%;
.btn{
    width: 100%;
    aspect-ratio: 10/2;
    background:#29AEF9;
    color:white;
    font-size:16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
}
`;