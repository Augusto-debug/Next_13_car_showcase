"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox>
        <div className="relative w-fit z-10 ">
          <Listbox.Button className="custom-filter__btn">
            <span>{title}</span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
