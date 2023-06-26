import { CarProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div> </div>;
};

export default CarDetails;
