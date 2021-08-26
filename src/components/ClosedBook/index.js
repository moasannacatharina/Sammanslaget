import "./closedbook.css";
import image from "../../assets/images/book.svg";

const ClosedBook = ({ handleClick, visible, invisible }) => {
  return (
    <div onClick={handleClick} className={`closed-book ${visible}`}>
      <div className={`blob white ${invisible}`}></div>
      <img src={image} alt="book cover" />
    </div>
  );
};

export default ClosedBook;
