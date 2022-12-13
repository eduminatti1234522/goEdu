import React from 'react'
import styles from 'styled-components'

function sturc() {
  return (
    <MainCont>
            <div className="singCity">
            <img src="../src/assets/cities/city1.jpg" alt="" />
            <h4>Ras Al Khaima American Academy</h4>
          </div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
.singCity{
    background: #FFFFFF;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
border-radius: 15px;
width: 97%;

img{
    width:100%;
    aspect-ratio:4/3;
}
h4{
    color:black;
    margin:20px auto 30px auto;
    padding-bottom: 8px;
    font-weight: 700;
    max-width:80%;
}
}
`;