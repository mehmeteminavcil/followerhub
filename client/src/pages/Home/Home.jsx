import React from "react";
import SocialMediaServices from "../../components/SocialMediaServices/SocialMediaServices";
import PopularServicePackages from "../../components/PopularServicePackages/PopularServicePackages";

const Home = () => {
  return (
    <div className="home">
      <SocialMediaServices />
      <PopularServicePackages />
    </div>
  );
};

export default Home;
