import React from 'react'
import styles from "styled-components"


function Map() {
  return (
    <MainDiv>
   <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6888.673430950683!2d78.04966312477076!3d30.31293888916962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b045cc25b1%3A0xcdb3dadf017e49cf!2sPanchpuri%20Colony%2C%20Dalanwala%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1671690954076!5m2!1sen!2sin" width="100%" height="550" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </MainDiv>
  )
}

export default Map

const MainDiv=styles.div`

`;