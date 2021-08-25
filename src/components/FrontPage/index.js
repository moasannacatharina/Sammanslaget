import React from "react";
import "./frontpage.css";

const FrontPage = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2 className="title">{props.children}</h2>
      </div>
    </div>
  );
});

export default FrontPage;
