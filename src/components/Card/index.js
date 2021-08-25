import "./card.css";

const Card = ({ img, title, email, info, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="contact">
        <img src={img} alt="hello" />
        <div>
          <h2>{title}</h2>
          <span>{email}</span>
        </div>
      </div>

      <p>{info}</p>
    </div>
  );
};

export default Card;
