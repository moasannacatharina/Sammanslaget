import "./card.css";

const Card = ({ img, title, email, info, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={img} alt="hello" />
      <h2>{title}</h2>
      <span>{email}</span>
      <p>{info}</p>
    </div>
  );
};

export default Card;
