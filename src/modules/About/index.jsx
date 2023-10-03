import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './About.module.scss';
import img from './assets/img.svg';
import horse from '../../components/Header/assets/horse.png';
import horse2x from '../../components/Header/assets/horse@2x.png';
import elemTop from './assets/elem-top.png';
import elemTop2x from './assets/elem-top@2x.png';
import elemBottom from './assets/elem-bottom.png';
import elemBottom2x from './assets/elem-bottom@2x.png';
import elemTopMobile from './assets/elem-top-mobile.png';
import elemTopMobile2x from './assets/elem-top-mobile@2x.png';
import elemBottomMobile from './assets/elem-bottom-mobile.png';
import elemBottomMobile2x from './assets/elem-bottom-mobile@2x.png';
import { useMediaQuery } from 'usehooks-ts';

const AboutSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section id='about' className={style.about}>
      <div className={style.about__top}>
        <img
          src={isMobile ? elemTopMobile : elemTop}
          srcSet={`${isMobile ? elemTopMobile : elemTop} 1x, ${
            isMobile ? elemTopMobile2x : elemTop2x
          } 2x`}
          alt=''
        />
      </div>
      <div className={style.about__bottom}>
        <img
          src={isMobile ? elemBottomMobile : elemBottom}
          srcSet={`${isMobile ? elemBottomMobile : elemBottom} 1x, ${
            isMobile ? elemBottomMobile2x : elemBottom2x
          } 2x`}
          alt=''
        />
      </div>
      <div className='container'>
        <div className={style.aboutBody}>
          {!isMobile && (
            <div className={style.about__img}>
              <img src={img} alt='' />
            </div>
          )}
          <div className={style.aboutContent}>
            <SectionTitle className={style.aboutContent__title}>
              About Us
            </SectionTitle>

            {isMobile && (
              <div className={style.about__img}>
                <img src={img} alt='' />
              </div>
            )}
            <div className={style.aboutContent__descr}>
              Howdy, folks! Welcome to "Wild Wild West" Token. We're crypto
              cowboys, just like you, navigating the thrilling, unregulated
              wilds of the crypto market. It's a place where things can get as
              wild as a rodeo, and that's what makes it a hoot! Our goal is
              simple: to bring the excitement of a popular meme to this wild,
              uncharted territory while ensuring you can ride with confidence!
              So, partner up with us, and let's embark on this wild crypto
              adventure. Yeehaw!
            </div>
            <Button isBig className={style.aboutContent__btn}>
              <img src={horse} srcSet={`${horse} 1x, ${horse2x} 2x`} alt='' />
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
