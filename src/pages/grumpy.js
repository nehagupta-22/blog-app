import React, { useState, useEffect} from 'react'
import '../App.css';
import yay from "../components/images/yay.jpg"
import Neha from "../components/images/Neha.jpg"
import DSC02878 from "../components/images/DSC02878.jpg"

function Page() {
  console.log('yay')

  return(
    <div className = "Mood-page">
    <h1> grumpy me </h1>
    <h2> psum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibu. </h2>

    <hr/>

    <div className= "Post">
       <div className = "Post-item">
            <img src = {yay} className = "Post-image"/>
       </div>
       <div className = "Post-item">
           <div className = "Post-date"> April 3 </div>
           <h3> Title </h3>
           <div className = "Info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibus neque lorem vel est. Suspendisse id  justo. psum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibupsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibupsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibu</div>
      </div>
    </div>

    <div className= "Post">
       <div className = "Post-item">
            <img src = {Neha} className = "Post-image"/>
       </div>
       <div className = "Post-item">
           <div className = "Post-date"> April 3 </div>
           <h3> Title </h3>
           <div className = "Info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibus neque lorem vel est. Suspendisse id egestas justo. </div>
      </div>
    </div>

    <div className= "Post">
       <div className = "Post-item">
            <img src = {DSC02878} className = "Post-image"/>
       </div>
       <div className = "Post-item">
           <div className = "Post-date"> April 3 </div>
           <h3> Title </h3>
           <div className = "Info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibus neque lorem vel est. Suspendisse id egestas justo. </div>
      </div>
    </div>



    </div>
  )
}

export default Page;
