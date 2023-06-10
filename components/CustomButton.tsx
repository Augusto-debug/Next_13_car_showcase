"use client"

import Image from "next/image"

function CustomButton( {text, ContainerStyle, handleClick} : {text : string, ContainerStyle: string, handleClick:any} ) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`${ContainerStyle} p-4`}
      // onClick={() => {alert('you clicked me')}}
      onClick={handleClick}
      > {text} 
    </button>
  )
}

export default CustomButton
