import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[70px] md:mb-5" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="footer-grid" className="w-full h-full opacity-50" />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:mx-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital presence to the next level ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            React out to me today and <span className="text-purple">let&apos;s discuss</span> how i can help you to achieve your goals <span className="text-purple">.</span>

        </p>

        <a href="mailto:muntasirul.msd@gmail.com">
            <MagicButton title="let's get in touch" icon ={<FaLocationArrow />} position="right" />
        </a>

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Muntasirul
        </p>
        <div className="flex items-center md:gap-3 gap-6">
{socialMedia.map((profile)=>(
    <div key={profile.id}>
        <img src={profile.img} alt="profile_img" className="w-7 h-7 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" width={20} height={20} />
    </div>
))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
