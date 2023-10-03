import style from './Card.module.scss';

const Card = ({ index, title, text }) => {
  return (
    <div className={style.card}>
      <div className={style.card__num}>0{index + 1}</div>
      <div className={style.cardContent}>
        <div className={style.cardContent__title}>{title}</div>
        <div className={style.cardContent__text}>{text}</div>
      </div>
    </div>
  );
};

export default Card;
