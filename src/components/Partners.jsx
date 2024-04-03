import React from "react";
import "../assets/css/partners.css";

const PartnersImage = (props) => {
  const { image } = props;
  return (
    <>
      <img width={100} height={40} src={image} alt="partners-logo" />
    </>
  );
};

const Partners = () => {
  return (
    <>
      <div className="partners">
        <h4>
          “We've got custom T-shirts in a range of fits and sizes, so everyone
          can wear your brand or message.”
        </h4>
        <PartnersImage image="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712142200/spotify_hnjrlt.png" />
        <PartnersImage image="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712142200/feedly_nsku3c.png" />
        <PartnersImage image="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712142201/lattice_kabke3.png" />
        <PartnersImage image="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712142200/hopin_mubhfw.png" />
        <PartnersImage image="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712142200/upwork_shtp2n.png" />
        <PartnersImage image="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712142200/hopin_mubhfw.png" />
      </div>
    </>
  );
};

export default Partners;
