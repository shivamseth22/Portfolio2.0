import React from 'react'

const Navbar = () => {
  return (
        <div className="flex justify-around ">
        <h1 className="font-bold text-3xl">PORTFOLIO</h1>
        <ul className="flex gap-10 text-xl font-bold">
          <li>About</li>
          <li>Experience</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
  )
}

export default Navbar