import React from "react";
import "./page.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={`demoPage ${props.even}`} ref={ref}>
      <h1>{props.header}</h1>
      <img
        className="page-img"
        src={props.image}
        //alt="Mika"
        onError={(event) => (event.target.style.display = "none")}
      />
      <p className="page-text">{props.children}</p>
      <p className="page-number">{props.number}</p>
    </div>
  );
});

export default Page;
