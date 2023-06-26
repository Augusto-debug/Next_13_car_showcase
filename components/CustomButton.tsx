"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyle} custom-btn`}
      // onClick={() => {alert('you clicked me')}}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcon}
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
