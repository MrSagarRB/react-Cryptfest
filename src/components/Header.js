import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { User } from "@nextui-org/react";

function Header() {
  return (
    <div className=" flex-center">
      <div className="flex-center gap-3">
        <img
          src="./logo/logo1.png"
          alt="Cryptfest-logo"
          className="w-[28px] h-[28px]"
        />
        <p className="text-[26px] font-[900] font-urbanist">
          {" "}
          Crypt<span className="font-[400]">fest </span>
        </p>
      </div>

      <div>
        <p className="font-roboto text-[20px] font-[500]">
          {" "}
          Welcome Back, Sagar
        </p>
      </div>

      <div className="flex-center">
        <div className="flex px-3 items-center dark-bg h-[48px] w-[281px] rounded-[16px] justify-between">
          <RiSearch2Line fontSize={24} />
          <input
            className="font-inter font-[500] text-[18px] bg-transparent outline-none text-white "
            placeholder="Search"
          />
        </div>
        <BiBell fontSize={24} className="mx-5"/>
      </div>

      <div className="flex-center ">
        <p className="font-inter font-[500] text-[18px]">Evano</p>
        <User src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="lg" />
      </div>
    </div>
  );
}

export default Header;
