import { useMediaQuery } from 'usehooks-ts';
import SectionTitle from '../../components/SectionTitle';
import style from './Team.module.scss';
import elemTop from '../About/assets/elem-top.png';
import elemTop2x from '../About/assets/elem-top@2x.png';
import elemBottom from '../About/assets/elem-bottom.png';
import elemBottom2x from '../About/assets/elem-bottom@2x.png';
import elemTopMobile from '../About/assets/elem-top-mobile.png';
import elemTopMobile2x from '../About/assets/elem-top-mobile@2x.png';
import elemBottomMobile from '../About/assets/elem-bottom-mobile.png';
import elemBottomMobile2x from '../About/assets/elem-bottom-mobile@2x.png';
import teamList from './teamList';
import { Swiper, SwiperSlide } from 'swiper/react';
import shots from './assets/shots.svg';

const TeamSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(max-width:1200px)');

  return (
    <section id='team' className={style.team}>
      {!isTablet && (
        <div className={style.team__shots}>
          <img src={shots} alt='' />
        </div>
      )}

      <div className={style.team__top}>
        <img
          src={isMobile ? elemTopMobile : elemTop}
          srcSet={`${isMobile ? elemTopMobile : elemTop} 1x, ${
            isMobile ? elemTopMobile2x : elemTop2x
          } 2x`}
          alt=''
        />
      </div>
      <div className={style.team__bottom}>
        <img
          src={isMobile ? elemBottomMobile : elemBottom}
          srcSet={`${isMobile ? elemBottomMobile : elemBottom} 1x, ${
            isMobile ? elemBottomMobile2x : elemBottom2x
          } 2x`}
          alt=''
        />
      </div>

      <div className={`${style.con} container`}>
        <SectionTitle className={style.team__title}>
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
          Team
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
        {!isTablet && (
          <div className={style.teamBody}>
            {teamList.map((item, index) => (
              <div key={index} className={style.teamBody__item}>
                <div className={style.teamBody__img}>
                  <img
                    src={item.img}
                    srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                    alt=''
                  />
                </div>
                <div
                  className={style.teamBody__name}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                ></div>
                <div className={style.teamBody__pos}>{item.pos}</div>
              </div>
            ))}
          </div>
        )}
        {isTablet && (
          <Swiper
            centeredSlides
            slidesPerView={'auto'}
            spaceBetween={8}
            className={style.teamSlider}
          >
            {teamList.map((item, index) => (
              <SwiperSlide key={index} className={style.teamSlider__item}>
                <div key={index} className={style.teamBody__item}>
                  <div className={style.teamBody__img}>
                    <img
                      src={item.img}
                      srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                      alt=''
                    />
                  </div>
                  <div
                    className={style.teamBody__name}
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  ></div>
                  <div className={style.teamBody__pos}>{item.pos}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
