import "./closedbook.css";
import image from "../../assets/images/book.svg";

const ClosedBook = ({ handleClick, visible }) => {
  return (
    <div onClick={handleClick}>
      <img src={image} className={`closed-book ${visible}`} alt="book cover" />
    </div>
  );
};

export default ClosedBook;
