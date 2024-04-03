import React from "react";
import "../assets/css/tutorials.css";

const TutorialCard = (props) => {
  const { description, cardImg, page, descInfo, reverse } = props;
  return (
    <>
      <div className="tutorial-card">
        <div style={reverse ? { order: 2 } : {}}>
          <h3>{description}</h3>
          <p>{descInfo}</p>
        </div>
        <p id="page" style={reverse ? { order: 1 } : {}}>
          {page}
        </p>
        <img width={300} height={200} src={cardImg} alt="tutorial-card" />
        {/* <div style={!reverse ? { order: 2 } : {}}>
          <h3>{description}</h3>
          <p>{descInfo}</p>
        </div> */}
      </div>
    </>
  );
};

const Tutorial = () => {
  return (
    <>
      <div className="tutorials">
        <h2>How To Create Custom Shirts</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          modi! obis est numquam obis est numquam.
        </p>

        <TutorialCard
          page="1"
          description="Add your shirt design"
          descInfo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, modi!"
          cardImg="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712144532/card1_fp7syt.png "
          reverse
        />
        <TutorialCard
          cardImg="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712144532/card2_a1kxtl.png"
          page="2"
          description="Custom art &amp; review"
          descInfo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          modi!"
        />
        <TutorialCard
          page="3"
          description="Enjoy your product"
          descInfo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, modi!"
          cardImg="https://res.cloudinary.com/ds83mhjcm/image/upload/v1712144566/card3_yrntlm.png"
          reverse
        />
      </div>
    </>
  );
};

export default Tutorial;
