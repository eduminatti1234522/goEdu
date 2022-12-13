import React from 'react'
import styles from 'styled-components'

function sturc() {
  return (
    <MainCont>
<img src="../src/assets/user.jpg" alt="" />
<div className="block2">
    <span>-Amit Bharadwaj</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
background: #FFFFFF;
box-shadow: 0px 0px 8px 3px rgba(124, 122, 40, 0.21);
padding:20px 30px;
color:black;
display: flex;
width: 80%;
max-width: 800px;
margin: auto;
.block2{
margin-left:30px;
margin-top:30px;
}
span{
    display:block;
    margin:auto;
    text-align: initial;
    font-size: 20px;
}
p{
    font-size:13px;
    opacity:0.9;
    margin-top:30px;
    margin-left:20px;
    text-align: initial;
    margin-left: 0;
}
img{
   object-fit:cover;
}
@media(max-width: 900px){
    flex-direction: column;
    width: 300px;
    max-width:75%;
    position: relative;
    padding-top: 150px;
    margin-top: 160px;

    .block2{
        margin: auto;
    }
    img{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%,-58%);
        width: 60%;
        border-radius: 12px;    
    }
}
`;