import React from 'react'
import styles from 'styled-components'

function sturc() {
    const data=[
        {
link:"",
name:"whatsapp"
    },
        {
link:"",
name:"fb"
    },
    {
    link:"",
    name:"ins"
    },
        {
link:"",
name:"tw"
    },
        {
link:"",
name:"youtube"
    },
]
  return (
    <MainCont>
{
    data.map((val,index)=>
    <a key={index} href={val.link}>
        <img src={`../src/assets/icons/socials/${val.name}.svg`} alt="" />
    </a>
    )
}
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
background: rgba(113, 129, 209, 0.6);
border-radius: 20px 0px 0px 20px;
position: absolute;
    top: 50%;
    right: 0;
    z-index: 9;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 12px;
    transform: translateY(-70%);
    @media(max-width: 700px){
        top: 60%;
    }
`;