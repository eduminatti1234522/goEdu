import React from 'react'
import styles from 'styled-components'
import cityimg from '../public/images/cities/city1.jpg'

const imgURL = "https://www.namastedehradun.com/wp-content/uploads/2017/02/Ecole-Globale-Girls-International-School.jpg"

const FeatureSchool = [{school:"Jain International School", img:"https://content3.jdmagicbox.com/comp/bilaspur-chhattisgarh/q7/9999p7752.7752.091120123808.g6q7/catalogue/the-jain-international-school-sakri-bilaspur-chhattisgarh-schools-1y8vtzu.jpg"},
{school:"Asian School", img:"https://content3.jdmagicbox.com/comp/dehradun/y6/9999px135.x135.121009132714.a2y6/catalogue/the-asian-school-dehradun-city-dehradun-schools-2jbi0a0.png"},
{school:"Doon Public School", img:" https://www.doonschool.com/wp-content/uploads/2019/08/24173858_2234362349914822_8661319849927400643_o.jpg"},
{school:" welham Girls School", img:"https://www.roundsquare.org/wp-content/uploads/2019/10/Welham-Girls%E2%80%99-School-1200x800.jpg"}]


function sturc() {
  return (
    <MainCont>
            <div className="singCity">
            <img src={imgURL} alt="" />
            <h4>Ecole Globale </h4>
          </div>



          {/* {FeatureSchool.map((val, index) => (
  <div key={index} className="outerSingCity">
    
  <div className="singCity">
    <img src={val.img} alt="" />
    <h4>{val.school}</h4>
  </div>
  


  </div>
))} */}

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