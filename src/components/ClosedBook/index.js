import "./closedbook.css";
import image from "../../assets/images/book.svg";

const ClosedBook = ({ handleClick, visible }) => {
  return (
    <div onClick={handleClick}>
      <img src={image} className={`closed-book ${visible}`} alt="book cover" />
      {/* <svg
        width="485"
        height="399"
        viewBox="0 0 485 399"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`closed-book ${visible}`}
      >
        <path
          d="M169.366 310.451L1.83592 55.46L316.634 0.548988L484.164 255.54L169.366 310.451Z"
          stroke="black"
        />
        <line
          x1="0.499976"
          y1="60.9951"
          x2="1.42155"
          y2="154.996"
          stroke="black"
        />
        <line
          x1="0.423901"
          y1="154.735"
          x2="152.424"
          y2="397.735"
          stroke="black"
        />
        <line
          x1="151.916"
          y1="397.507"
          x2="473.916"
          y2="342.507"
          stroke="black"
        />
        <line
          x1="473.504"
          y1="342.937"
          x2="484.504"
          y2="255.937"
          stroke="black"
        />
        <line
          x1="169.491"
          y1="311.096"
          x2="152.491"
          y2="398.096"
          stroke="black"
        />
      </svg> */}
    </div>
  );
};

export default ClosedBook;