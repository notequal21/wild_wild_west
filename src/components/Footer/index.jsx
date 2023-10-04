import socialLinks from '../../modules/Main/socialLinks';
import { headerLinks } from '../Header/links';
import style from './Footer.module.scss';
import logo from '../Header/assets/logo.png';
import logo2x from '../Header/assets/logo@2x.png';
import { useMediaQuery } from 'usehooks-ts';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:991px)');

  const toSection = (sectionId) => {
    const block = document.querySelector(`${sectionId}`);
    block.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={style.footer}>
      <div className='container'>
        {isMobile && (
          <div className={style.footer__logo}>
            <img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt='' />
          </div>
        )}
        <div className={style.footerLinks}>
          {headerLinks.map((item, index) => (
            <div
              key={index}
              onClick={() => toSection(item.to)}
              className={style.footerLinks__item}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={style.footerBottom}>
          <div className={style.footerBottom__cr}>
            Copyright © 2020-2023 Wild Wild West
          </div>
          {!isMobile && (
            <div className={style.footerBottom__logo}>
              <img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt='' />
            </div>
          )}
          <div className={style.footerBottom__social}>
            {socialLinks.map((item, index) => (
              <a
                className={style.footerBottom__socialItem}
                key={index}
                href={item.href}
                target='_blank'
                rel='noreferrer'
              >
                <img src={item.icon} alt='' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
