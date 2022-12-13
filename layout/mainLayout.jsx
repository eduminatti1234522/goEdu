import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from 'styled-components'

function MainLayout({children}) {
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