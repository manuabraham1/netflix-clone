import React, { useState } from 'react'
import "./NavBar.css";

function NavBar() {

  const [colorChange,setColorchange]=useState(false)
  const changeNavbarColor=()=>{
    if(window.scrollY>=80){
      setColorchange(true)
    }else{
      setColorchange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={colorChange ? 'navbar-colorChange': 'navbar'}>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar