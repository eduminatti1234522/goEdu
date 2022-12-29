import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

function MainLayout({children}) {
  const {user} = useSelector((state) => state.main)
  const dispatch = useDispatch()
const onChange=()=>{
  dispatch(storeUser({name:"textingg"}))
}
  return (
    <MainCont>
        <div className="header">
      <Header/>
        </div>
      {children}
      <Footer/>
    </MainCont>
  )
}

export default MainLayout;


const MainCont=styles.div`
.header{
    position:absolute;
    width:100vw;
    z-index:9;
}
`;