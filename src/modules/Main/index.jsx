import style from './Main.module.scss';
import socialLinks from './socialLinks.js';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import imgMobile from './assets/img-mobile.png';
import imgMobile2x from './assets/img-mobile@2x.png';
import { useMediaQuery } from 'usehooks-ts';

const MainSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <main className={style.main}>
      <div className='container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__img}>
            <img
              src={isMobile ? imgMobile : img}
              srcSet={`${isMobile ? imgMobile : img} 1x, ${
                isMobile ? imgMobile2x : img2x
              } 2x`}
              alt=''
            />
          </div>

          <div className={style.mainBody__title}>
            welcome to <br />
            <span>Wild Wild West</span> <br />
            metaverce
          </div>
          <div className={style.mainBody__subtitle}>Powered by Ethereum</div>
          <div className={style.mainBody__address}>
            Contract Address: <br />
            <span>0xBb62dA70E88e4e1214796C515d0d0468b2a74694</span>
          </div>
          <div className={style.mainBody__links}>
            {socialLinks.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className={style.mainBody__linksItem}
              >
                <img src={item.icon} alt='' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
