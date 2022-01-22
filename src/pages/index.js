import React from 'react'
import Image from 'react-bootstrap/Image'
import background from "../components/images/coverpage.jpg"
import '../App.css'

function Home () {
  return (
    <div className = "Homepage" >
        <Image src={background} roundedCircle="true" />
        <div className= "Main">
        <h1> moody me </h1>
        </div>

       <div className="About">
        <h2> Hey, I'm Neha! </h2>
        <p> And I’m a moody girl. I flit rapidly between happy, sad and confused, but most often, I stress about my employability prospects—hence this attempt at learning web development. Built using a Flask API, the React.js framework and plenty of love, this baby blog of mine reflects its momma raw and unfiltered. Here, you'll find not so much discursive essays as half-formed questions and their hesitant answers. Happy reading!
        </p>
       </div>
  </div>

)

}

export default Home;
