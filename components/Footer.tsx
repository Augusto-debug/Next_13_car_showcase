import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 border-2 border-red-600">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 border-2 border-green-600">
        <div className="flex flex-col justify-start items-start gap-6 border-blue-600 border-4">
          <Image src="logo.svg" alt="logo" width={118} height={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
