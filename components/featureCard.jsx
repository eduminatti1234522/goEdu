import React from 'react'
import styles from 'styled-components'
// import img1 from "../public/featureHome/fea1.svg"
// import img2 from "../public/featureHome/fea2.svg"
// import img3 from "../public/featureHome/fea3.svg"
// import img4 from "../public/featureHome/fea4.svg"

function sturc({data,id}) {
  return (
    <MainCont className={id%2 !== 1 ? "mainCont" : ""}>
<div className="icon">


    {/* <img src={`../public/featureHome/fea${id}.svg`} alt="" /> */}


    {/* <img src={`https://cdn.discordapp.com/attachments/1031605156996972574/1075675055679352852/fea${id}.webp`} alt="" /> */}


    <img src={data?.fea} alt="" /> 
</div>
<div className="content">
    <h3>{data?.title}</h3>
    <p>{data?.para}</p>
</div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
background:#455BC8;
width: calc(100% / 6);
min-width: 150px;
padding:17px;
&.mainCont{
    background:#7181D1;
    display: flex;
    flex-direction: column-reverse;
    h3{
        margin-top:40px;
    }
}
.icon{
    background: rgba(217, 217, 217, 0.98);
box-shadow: inset 4px 4px 8px #121733;
border-radius: 9px;
width:100% ;
aspect-ratio: 4/3;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
img{
    width:40%;
    aspect-ratio: 1/1; 
}
}
h3{
    font-size: 14px;
    margin-bottom: 40px;
    margin-top:20px;
}
p{
    font-size: 11px;
}
`;