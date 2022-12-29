import React from 'react'
import styles from 'styled-components'

function sturc({data,id}) {
  return (
    <MainCont className={id%2 !== 1 ? "mainCont" : ""}>
<div className="icon">
    <img src={`../src/assets/icons/features/fea${id}.svg`} alt="" />
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