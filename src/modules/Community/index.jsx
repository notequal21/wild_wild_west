import { useMediaQuery } from 'usehooks-ts';
import style from './Community.module.scss';

import pistols from './assets/pistols.png';
import pistols2x from './assets/pistols@2x.png';
import elemTop from '../About/assets/elem-top.png';
import elemTop2x from '../About/assets/elem-top@2x.png';
import elemBottom from '../About/assets/elem-bottom.png';
import elemBottom2x from '../About/assets/elem-bottom@2x.png';
import elemTopMobile from '../About/assets/elem-top-mobile.png';
import elemTopMobile2x from '../About/assets/elem-top-mobile@2x.png';
import elemBottomMobile from '../About/assets//elem-bottom-mobile.png';
import elemBottomMobile2x from '../About/assets//elem-bottom-mobile@2x.png';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';

const CommunitySection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section id='community' className={style.community}>
      <div className={style.community__pistols}>
        <img src={pistols} srcSet={`${pistols} 1x, ${pistols2x} 2x`} alt='' />
      </div>

      <div className={style.community__top}>
        <img
          src={isMobile ? elemTopMobile : elemTop}
          srcSet={`${isMobile ? elemTopMobile : elemTop} 1x, ${
            isMobile ? elemTopMobile2x : elemTop2x
          } 2x`}
          alt=''
        />
      </div>
      <div className={style.community__bottom}>
        <img
          src={isMobile ? elemBottomMobile : elemBottom}
          srcSet={`${isMobile ? elemBottomMobile : elemBottom} 1x, ${
            isMobile ? elemBottomMobile2x : elemBottom2x
          } 2x`}
          alt=''
        />
      </div>

      <div className='container'>
        <div className={style.communityBody}>
          <SectionTitle className={style.communityBody__title}>
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
            Community
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
          <div className={style.communityBody__text}>
            <p>🤠 Howdy, fellow crypto wranglers! 🤠</p>
            <p>
              This is where the party's at - our wild and wacky community hub.
              Grab your spurs and join our posse of crypto cowboys and cowgirls!
              We're all about memes, laughter, and riding the crypto
              rollercoaster together. No fancy lingo here, just good ol' fun and
              good ol' folks. So, mosey on over and join the rootinest,
              tootinest crypto community this side of the digital prairie!
            </p>
          </div>
          <Button isBig className={style.communityBody__btn}>
            VISIT COMMUNITY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
