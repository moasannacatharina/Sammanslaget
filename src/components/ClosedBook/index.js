import "./closedbook.css";
import image from "../../assets/images/bookcover-2.png";

const ClosedBook = ({ handleClick, visible, invisible }) => {
  return (
    <div onClick={handleClick} className={`closed-book ${visible}`}>
      <div className={`blob white ${invisible}`}></div>
      <img src={image} alt="book cover" />
    </div>
  );
};

export default ClosedBook;
