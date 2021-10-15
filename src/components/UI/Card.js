import "./Card.css";

const Card = (props) => {
  const classes = "card" + props.className;
  return <div className="card">{props.children}</div>;
};

export default Card;
