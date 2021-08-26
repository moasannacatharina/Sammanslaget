import "./card.css";

const Card = ({ img, name, title, email, info, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="contact">
        <div className="img-container">
          <img src={img} alt="hello" />
        </div>
        <div>
          <h2>{name}</h2>
          <h4>{title}</h4>
          <span>{email}</span>
        </div>
      </div>

      <p>{info}</p>
    </div>
  );
};

export default Card;
