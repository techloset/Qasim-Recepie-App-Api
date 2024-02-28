import React from "react";
import Banner from "../components/Header/Banner";

import SliceCard from "../components/homeCards/HomeCards";
import RecentlyView from "./RecentlyView";
import Images from "../constant/Images";

const HomePage = () => {
  return (
    <div className=" ">
      <Banner
        imageUrl={Images.banImg}
        title="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />

      <SliceCard />
      <RecentlyView />
    </div>
  );
};

export default HomePage;
