import React from "react";
import Images from "../../constant/Images";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-yellow-300  ">
          <div className="    flex justify-around items-center sm:flex-row flex-col">
            <div className="flex flex-row">
              <img className="w-10 m-3 " src={Images.logoIcon} alt="" />
              <h1 className="m-3 text-3xl  font-bold md:flex hidden">
                Delícias à Mesa
              </h1>
            </div>

            <div className="flex flex-col p-3">
              <div>
                <h2 className="text-2xl font-semibold ">Redes sociais:</h2>
              </div>
              <div className="flex lg:flex-row lg:m-3 sm:p-9  ">
                <img className="m-1 lg:" src={Images.youtubeIcon} alt="" />
                <img className="m-1 lg:" src={Images.twitterIcon} alt="" />
                <img className="m-1 lg:" src={Images.socialIcon} alt="" />
                <img className="m-1 lg:" src={Images.pinterestIcon} alt="" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
