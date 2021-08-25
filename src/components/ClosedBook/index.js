import "./closedbook.css";
import image from "../../assets/images/book.svg";

const ClosedBook = ({ handleClick, visible }) => {
  return (
    <div onClick={handleClick} className={`closed-book ${visible}`}>
      <div className="blob white"></div>
      <img src={image} alt="book cover" />
    </div>
  );
};

export default ClosedBook;
