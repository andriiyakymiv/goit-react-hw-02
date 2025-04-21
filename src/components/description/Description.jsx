import style from './Description.module.css';

const Description = ({ title, text }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Description;