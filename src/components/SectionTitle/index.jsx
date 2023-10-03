import style from './SectionTitle.module.scss';

const SectionTitle = ({ children, className }) => {
  return <div className={`${style.title} ${className}`}>{children}</div>;
};

export default SectionTitle;
