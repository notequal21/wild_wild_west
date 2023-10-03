import style from './Header.module.scss';
import logo from './assets/logo.png';
import logo2x from './assets/logo@2x.png';
import horse from './assets/horse.png';
import horse2x from './assets/horse@2x.png';
import { headerLinks } from './links.js';
import Button from '../Button';
import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:1200px)');
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toSection = (sectionId) => {
    const block = document.querySelector(`${sectionId}`);
    block.scrollIntoView({ behavior: 'smooth' });
    setBurgerOpen(false);
  };

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt='' />
          </div>
          {!isMobile && (
            <div className={style.headerBody__links}>
              {headerLinks.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toSection(item.to)}
                  className={style.headerBody__linksItem}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          <Button className={style.headerBody__btn}>
            <img src={horse} srcSet={`${horse} 1x, ${horse2x} 2x`} alt='' />
            how to buy
          </Button>

          {isMobile && (
            <div
              onClick={() => setBurgerOpen(!isBurgerOpen)}
              className={style.headerBody__burger}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {isMobile && (
            <div
              className={`${style.headerBody__menu} ${
                isBurgerOpen && style._open
              }`}
            >
              {headerLinks.map((item, index) => (
                <div
                  onClick={() => toSection(item.to)}
                  key={index}
                  className={style.headerBody__menuItem}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
