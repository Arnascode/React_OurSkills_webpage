import css from './Card.module.css';

function Card(props) {
  return (
    <div className={css.card}>
      <div className={css.body}>
        <h2>{props.id}</h2>
        <h3 className={css.title}>{props.title}</h3>
        <p className={css.text}>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
