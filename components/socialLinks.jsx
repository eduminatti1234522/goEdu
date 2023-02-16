import React from 'react'
import styles from 'styled-components'
import fb from "../src/assets/icons/socials/fb.svg"
import ins from "../src/assets/icons/socials/ins.svg"
import tw from "../src/assets/icons/socials/fb.svg"
import whatsapp from "../src/assets/icons/socials/whatsapp.svg"
import youtube from "../src/assets/icons/socials/youtube.svg"



function sturc() {
    const data=[
        {
link:"",
name:fb
    },
        {
link:"",
name:ins
    },
    {
    link:"",
    name:tw
    },
        {
link:"",
name:whatsapp
    },
        {
link:"",
name:youtube
    },
]
  return (
    <MainCont>
{
    data.map((val,index)=>
    <a key={index} href={val.link}>
        <img src={val.name} alt="" />
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