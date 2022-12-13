import React from 'react'
import styles from 'styled-components'
import Btn from './btn'

function sturc() {
  return (
    <MainCont>
        <img src="../src/assets/aboutImg.png" alt="" />
        <div className="cont">
            <p>In this time and era, education has become a valuable commodity. It is impossible to imagine a fruitful and satisfying life without schooling. However, with so many choices, resources, and facilities offered, choosing the best choice has become a huge challenge.</p>
            <p>
Educational Consultancy has a major impact to simplify this hunt. With the help of a team of knowledgeable Education Consultants, we at Edu My Nation aspire to make education affordable, advantageous, intelligent, successful, enjoyable, and life-changing to everyone. We collaborate with our experts to solve educational issues and problems faced by the students, parents/ guardian, educators, and even institutions, easing the way for a better and more prosperous future.
            </p>
            <div className="btn">
       <Btn text={"Read More"}/>
       </div>
        </div>
    </MainCont>
  )
}

export default sturc


const MainCont=styles.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    position:relative;
    padding: 60px 0;
.btn{
    width:200px;
    margin: 100px auto 0px auto;
}
img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.cont{
    color: black;
    text-align: center;
    width: 70%;
    line-height: 37px;
}
@media(max-width: 700px){
    .cont{
font-size: 15px;
width: 90%;
line-height: 30px;

    }  
    .btn{
        margin: 50px auto 0px auto;
    }
}
`;