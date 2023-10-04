import SectionTitle from '../../components/SectionTitle';
import style from './Faq.module.scss';
import Accordion from './components/Accordion';
import faqList from './faqList';
import elemTop from '../About/assets/elem-top.png';
import elemTop2x from '../About/assets/elem-top@2x.png';
import elemBottom from '../About/assets/elem-bottom.png';
import elemBottom2x from '../About/assets/elem-bottom@2x.png';
import elemTopMobile from '../About/assets/elem-top-mobile.png';
import elemTopMobile2x from '../About/assets/elem-top-mobile@2x.png';
import elemBottomMobile from '../About/assets//elem-bottom-mobile.png';
import elemBottomMobile2x from '../About/assets//elem-bottom-mobile@2x.png';
import { useMediaQuery } from 'usehooks-ts';
import shots from './assets/shots.svg';
import { useEffect } from 'react';

const Faq = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <section id='faq' className={style.faq}>
      <div className={style.faq__top}>
        <img
          src={isMobile ? elemTopMobile : elemTop}
          srcSet={`${isMobile ? elemTopMobile : elemTop} 1x, ${
            isMobile ? elemTopMobile2x : elemTop2x
          } 2x`}
          alt=''
        />
      </div>
      <div className={style.faq__bottom}>
        <img
          src={isMobile ? elemBottomMobile : elemBottom}
          srcSet={`${isMobile ? elemBottomMobile : elemBottom} 1x, ${
            isMobile ? elemBottomMobile2x : elemBottom2x
          } 2x`}
          alt=''
        />
      </div>

      <div className={`${style.con} container`}>
        <SectionTitle className={style.faq__title}>
          <svg
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.4931 0L28.3098 15.7259L45 16.4338L31.9021 26.8438L36.4062 43L22.4931 33.7143L8.5938 43L13.0841 26.8438L0 16.4338L16.6764 15.7259L22.4931 0Z'
              fill='#4C4544'
            />
          </svg>
          FAQs
          <svg
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.4931 0L28.3098 15.7259L45 16.4338L31.9021 26.8438L36.4062 43L22.4931 33.7143L8.5938 43L13.0841 26.8438L0 16.4338L16.6764 15.7259L22.4931 0Z'
              fill='#4C4544'
            />
          </svg>
        </SectionTitle>
        <div className={style.faqBody}>
          {faqList.map((item, index) => (
            <Accordion faq={item} key={index} />
          ))}

          <div className={style.faqBody__shots}>
            <img src={shots} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
