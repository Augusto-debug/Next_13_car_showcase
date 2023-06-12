"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyle} custom-btn`}
      // onClick={() => {alert('you clicked me')}}
      onClick={handleClick}
    >
      {" "}
      {title}
    </button>
  );
}

export default CustomButton;
