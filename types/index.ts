import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
  pageNumber?: number;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
