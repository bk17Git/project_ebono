import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const NavbarHelp = ({ goback, name }) => {
  return (
    <div
        className=" flex shadow-xl z-50"
        style={{
          backgroundColor: "#ffffffff",
          padding: "10px",
          flexDirection: "row",
        }}
      >
        <button
          onClick={goback}
          style={{
            color: "#0492c2",
            fontSize: "23px",
            paddingRight: "10px",
            fontWeight: "bold",
          }}
        >
          <BsArrowLeft />
        </button>
        <h1 className='text-xl font-bold' style={{ color: "#0492c2" }}>
          {name}
        </h1>
      </div>
  )
}

export default NavbarHelp