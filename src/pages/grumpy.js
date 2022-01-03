import React, { useState, useEffect} from 'react'
import '../App.css';
import yay from "../components/images/yay.jpg"
import Neha from "../components/images/Neha.jpg"
import DSC02878 from "../components/images/DSC02878.jpg"

function Page() {

  const [blurbOpacity, setBlurbOpacity] = useState(1)
  const [postOpened, setPostOpened] = useState(false)

  function open_post(id) {
    if (!postOpened) {
      document.getElementById(id).style.display = "block";
      setBlurbOpacity(0.5);
      setPostOpened(true);
    }
  }

  function close_post(id) {
    document.getElementById(id).style.display = "none";
    setBlurbOpacity(1);
    setPostOpened(false);
  }

  return(
    <div className = "Mood-page">
    <h1> grumpy me </h1>
    <h2> psum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibu. </h2>

    <div className = "Blah">
    <div className= "Blurb" style = {{opacity: blurbOpacity}} onClick = {() => {open_post("Post1")}}>
    <a>
       <div className = "Blurb-item">
            <img src = {yay} className = "Blurb-image"/>
       </div>
       <div className = "Blurb-item">
           <div className = "Post-date"> April 3 </div>
           <h3> Title </h3>
           <div className = "Info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibus neque lorem vel est. Suspendisse id  justo. psum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibupsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibupsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibu</div>
      </div>
      </a>
    </div>

    <div className = "Post" id = "Post1">

        <button className = "Close-button" onClick = {() => {close_post("Post1")}}> <a>&times; </a></button>
        <h3> Title </h3>
        <div className = "Content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus urna, eu sollicitudin sem. Quisque eu euismod magna, nec porta nisl. Donec egestas aliquam orci a congue. Aenean hendrerit, est eu mollis vestibulum, ligula nulla pretium eros, id fringilla neque erat vel augue. Etiam id tortor a magna ornare molestie. Phasellus ut lacus luctus lacus hendrerit ullamcorper. Nunc maximus nunc ut scelerisque dictum. Ut tempus nulla eget lacus interdum, sed dignissim magna bibendum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus urna, eu sollicitudin sem. Quisque eu euismod magna, nec porta nisl. Donec egestas aliquam orci a congue. Aenean hendrerit, est eu mollis vestibulum, ligula nulla pretium eros, id fringilla neque erat vel augue. Etiam id tortor a magna ornare molestie. Phasellus ut lacus luctus lacus hendrerit ullamcorper. Nunc maximus nunc ut scelerisque dictum. Ut tempus nulla eget lacus interdum, sed dignissim magna bibendum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus urna, eu sollicitudin sem. Quisque eu euismod magna, nec porta nisl. Donec egestas aliquam orci a congue. Aenean hendrerit, est eu mollis vestibulum, ligula nulla pretium eros, id fringilla neque erat vel augue. Etiam id tortor a magna ornare molestie. Phasellus ut lacus luctus lacus hendrerit ullamcorper. Nunc maximus nunc ut scelerisque dictum. Ut tempus nulla eget lacus interdum, sed dignissim magna bibendum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus urna, eu sollicitudin sem. Quisque eu euismod magna, nec porta nisl. Donec egestas aliquam orci a congue. Aenean hendrerit, est eu mollis vestibulum, ligula nulla pretium eros, id fringilla neque erat vel augue. Etiam id tortor a magna ornare molestie. Phasellus ut lacus luctus lacus hendrerit ullamcorper. Nunc maximus nunc ut scelerisque dictum. Ut tempus nulla eget lacus interdum, sed dignissim magna bibendum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus urna, eu sollicitudin sem. Quisque eu euismod magna, nec porta nisl. Donec egestas aliquam orci a congue. Aenean hendrerit, est eu mollis vestibulum, ligula nulla pretium eros, id fringilla neque erat vel augue. Etiam id tortor a magna ornare molestie. Phasellus ut lacus luctus lacus hendrerit ullamcorper. Nunc maximus nunc ut scelerisque dictum. Ut tempus nulla eget lacus interdum, sed dignissim magna bibendum.</p>
        </div>
    </div>
    </div>

    <div className = "Blah">
    <div className= "Blurb" style = {{opacity: blurbOpacity}} onClick = {() => {open_post("Post2")}}>
    <a>
       <div className = "Blurb-item">
            <img src = {Neha} className = "Blurb-image"/>
       </div>
       <div className = "Blurb-item">
           <div className = "Post-date"> April 3 </div>
           <h3> Title </h3>
           <div className = "Info"> blah</div>
      </div>
      </a>
    </div>

    <div className = "Post" id = "Post2">

        <button className = "Close-button" onClick = {() => {close_post("Post2")}}> <a>&times; </a></button>
        <h3> Title </h3>
        <div className = "Content">
        <p>blah.</p>
        </div>
    </div>
    </div>

{/*
        <div className= "Blurb">
           <div className = "Blurb-item">
            <img src = {Neha} className = "Blurb-image"/>
           </div>
           <div className = "Blurb-item">
               <div className = "Post-date"> April 3 </div>
               <h3> Title </h3>
               <div className = "Info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, augue a facilisis efficitur, justo arcu hendrerit arcu, a dapibus neque lorem vel est. Suspendisse id egestas justo. </div>
           </div>
        </div>
        */}


        <div className = "header">
        <p>moody me</p>
        </div>

        </div>

  )
}

export default Page;
