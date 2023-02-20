import React from 'react'
import styles from 'styled-components'
import cityimg from '../public/images/cities/city1.jpg'



function sturc(props) {
  return (
    <MainCont>
            <div className="singCity">
            <img src={props.url} alt="" />
            <h4> {props.name}</h4>
          </div>




    </MainCont>



  )
}

export default sturc


const MainCont=styles.div`
.singCity{
    background: #FFFFFF;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.10);
border-radius: 15px 15px 15px 15px;
width: 97%;

img{
    width:100%;
    aspect-ratio:4/3;
    border-radius: 15px 15px 0px 0px;
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