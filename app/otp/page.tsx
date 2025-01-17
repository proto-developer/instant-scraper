import React from "react";
import Image from "next/image";
import OTP from "@/components/otp/otp";
import Crousel from "@/components/ui/carouel";


const OTPPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Box */}
      <div className="leftBox p-[32px_16px] h-full flex flex-col items-center justify-center gap-[34px] flex-1">
                    <Image src="/logo.svg" alt="logo" width={170} height={40} className="w-[250px] md:w-[170px] lg:w-[170px]"/>
        <OTP />
      </div>

      {/* Right Box (hidden on small screens) */}
      <div className="rightBox hidden sm:flex flex-col items-center justify-center bg-[#2C2C2C] h-full w-1/2 p-10">
        <h1 className="text-[24px] font-medium text-center text-white">
          Effortlessly Download Your Scraped Data
        </h1>

        <Crousel/>

      </div>
    </div>
  );
};

export default OTPPage;
