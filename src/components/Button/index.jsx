import { useMediaQuery } from 'usehooks-ts';
import style from './Button.module.scss';
import elem1 from './assets/elem-1.jsx';
import elem2 from './assets/elem-2.jsx';
import elem1Mobile from './assets/elem-mobile-1.jsx';
import elem2Mobile from './assets/elem-mobile-2.jsx';

const Button = ({ className, children, isBig }) => {
  const isMobile = useMediaQuery('(max-width:1200px)');

  return (
    <button
      className={`${style.button} ${isBig ? style.big : ''} ${className}`}
    >
      {isMobile ? (isBig ? elem1 : elem1Mobile) : elem1}
      <span>
        <span>{children}</span>
      </span>
      {isMobile ? (isBig ? elem2 : elem2Mobile) : elem2}
    </button>
  );
};

export default Button;
