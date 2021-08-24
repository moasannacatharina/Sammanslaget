import React from "react";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={`demoPage ${props.even}`} ref={ref}>
      <h1>{props.header}</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default Page;
