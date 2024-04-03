import React from "react";

// const PropsC = (props) => {
//   const { fname, location } = props;
//   return (
//     <>
//       <h3>
//         My name is {fname}. I live in {location}, Lagos
//       </h3>
//     </>
//   );
// };

// export default PropsC;

export default function Car(props) {
  return (
    <h2>
      My name is {props.fname}. I live in {props.location}!{" "}
    </h2>
  );
}
