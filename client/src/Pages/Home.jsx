import React from 'react'
import Navbar from '../componet/Navbar'
import Header from '../componet/Header'
import Steps from '../componet/Steps'
import Bgslider from '../componet/Bgslider'
import Testmonial from '../componet/Testmonial'
import Upload from '../componet/Upload'

function Home() {
  return (
    <div>
    
        <Header/>
        <Steps/>
        <Bgslider/>
        <Testmonial/>
        <Upload/>
    </div>
  )
}

export default Home