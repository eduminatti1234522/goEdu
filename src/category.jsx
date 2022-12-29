import React,{useState,useRef} from 'react'
import styles from "styled-components";
import SideBar from "../components/topLeftSideBar";
import Socials from "../components/socialLinks";
import Search from "../components/searchCont";
import Map from "../components/map";
import Filter from "../components/filter";
import Card from "../components/schoolCard";
import Enqury from "../components/enquiryForm";
import Testimonial from "../components/testimonial";
import Pagination from "../components/paginationCont";

function Category() {
  const myRef = useRef(null)
  const items=[...new Array(32)].map((_,index)=>index);
  const [current, setCurrent] = useState([]);
 
const itemsPerPage=10;
  return (
    <MainCont>
         <section className="section1">
        <div className="sideBar bg">
         <SideBar />
        </div>
        <div className="innerDiv">
        <div className="btns">
          <span>FIND SCHOOLS</span>
          <span>SCHOLASHIPS</span>
        </div>
        <div className="search">
        <Search/>
        </div>
        </div>
        <div className="socials sm">
        <Socials/>
        </div>
        <img className="mainImgg" src="/mainTopImg.png" alt="" />
      </section>
      <div className="btns btnsOuter">
          <span>FIND SCHOOLS</span>
          <span>SCHOLASHIPS</span>
        </div>
        <section className="section2">
          <div className="block1">
            <h3>Search by Maps</h3>
            <div className="map">
       <Map/>
            </div>
          </div>
          <div className="block2">
          <h3>Filter</h3>
          <Filter/>
          </div>
        </section>
        <section className="section3">
          <div className="block1">
            <div className="form">
<Enqury mainStyle={true}/>
            </div>
          </div>
  <div ref={myRef} className="block2">
  <Pagination myRef={myRef} itemsPerPage={itemsPerPage} setCurrent={setCurrent} items={items}>
  <div style={{width: '100%'}} className="blockIn2">
            {
              current.map((val,index)=>
              <Card key={index}/>
              )
            }
          </div>
  </Pagination>
          </div>
        </section>
      <Testimonial/>
    </MainCont>
  )
}

export default Category

const MainCont = styles.div`
.section1{
    position: relative;   
    width:100vw;
    height:350px;
    display: flex;
    justify-content: center;
    align-items: center;
    .sideBar{
      position:absolute;
      height:100%;
      z-index:99;
      display:initial;
      left:0;
      top:0;
  }
    .mainImgg{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      object-fit: cover;
    }
  .innerDiv{
    z-index:99;
  }
  }
  .btns{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    display:none;
    justify-content:space-between;
    span{
      display:block;
      background: #3e4d99;
    // padding: 13px 20px;
    // width:45%;
    border-radius: 10px;
    margin-right: 20px;
    width: 219px;
    max-width: 47%;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    margin:0;
    }
    span:nth-child(2){
      background: #fff;
color:black;
border:2px solid #3e4d99;
margin-left:6%;
    }
  }
  .btnsOuter{
    width:90%;
    margin:auto;
    display:flex;
    position:relative;
    margin: 50px 0;
  }
  .sm{
    display:none;
  }
  .bg{
    display:initial ;
  }
  .section2{
    display: flex;
    padding: 20px;
    justify-content:space-between;
    h3{
      color: #3e4d99;
      text-align: left;
      margin-bottom:40px;
    }
    .block1{
      width:70%;
    }
    .block2{
      width: 26%;
      position:relative;
    }
  }
  .section3{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 30px;
    .block1{
      width:25%;
      .form{
        width:100%;
      }
    }
    .block2{
           width: 70%;
     }
  }
@media(max-width:1000px){
  .section3{
    padding: 12px;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    .block1, .block2{
      width:99%;
      max-width:500px;
    }
  }
}
  @media(max-width:1000px){
    .btns{
    display:flex;
    }
    .btnsOuter{
      display:none;
    }
    .sm{
      display:initial;
    }
    .bg{
      display:none !important;
    }
    .section1{
      height:70vh;
    }
    .search{
        position: absolute;
        bottom: -12px;
        left: 50%;
      transform: translateX(-50%);
      width: 350px;
      }
      .section2{
        flex-direction: column;
        h3{
          font-size: 20px;
        }
        .block1{
          width:100%;
          margin-top:40px;
          margin-bottom:40px;
        }
        .block2{
          width:100%;
        }
      }
  }
`;