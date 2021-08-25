import React from "react";
import "./index.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={`demoPage ${props.even}`} ref={ref}>
      <h1>{props.header}</h1>
      <img src={props.image} alt="pic of Mika" />
      <p className="page-text">{props.children}</p>
      <p className="page-number">{props.number}</p>
    </div>
  );
});

export default Page;
