import SectionTitle from '../../components/SectionTitle';
import style from './Tokenomics.module.scss';
import shots from './assets/shots.png';
import shots2x from './assets/shots@2x.png';
import shotsMobile from './assets/shots-mobile.png';
import shotsMobile2x from './assets/shots-mobile@2x.png';
import person from './assets/person-1.svg';
import person2 from './assets/person-2.svg';
import { useMediaQuery } from 'usehooks-ts';

const TokenomicsSection = () => {
  const isMobile = useMediaQuery('(max-width:850px)');

  return (
    <section id='tokenomics' className={style.tokenomics}>
      <div className='container'>
        <div className={style.tokenomicsBody}>
          <SectionTitle className={style.tokenomicsBody__title}>
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
            Tokenomics
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
          <div className={style.tokenomicsCard}>
            <div className={style.tokenomicsCard__shots}>
              <img
                src={isMobile ? shotsMobile : shots}
                srcSet={`${isMobile ? shotsMobile : shots} 1x, ${
                  isMobile ? shotsMobile2x : shots2x
                } 2x`}
                alt=''
              />
            </div>

            <div className={style.tokenomicsCard__title}>Max Supply:</div>
            <div className={style.tokenomicsCard__value}>1,000,000,000,000</div>
            <div className={style.tokenomicsCard__locked}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='460'
                height='65'
                viewBox='0 0 460 65'
                fill='none'
              >
                <path
                  d='M459.527 32.3112C459.527 21.845 453.977 13.0773 446.46 10.5372V4.26358C446.46 2.36619 445.026 0.83606 443.242 0.83606L18.542 0.836153C16.7733 0.836153 15.3248 2.36629 15.3248 4.26367V10.2313C6.92346 11.8991 0.473816 21.2177 0.473816 32.4949C0.473816 43.7721 6.92346 53.0907 15.3248 54.7586V60.7262C15.3248 62.6236 16.758 64.1537 18.542 64.1537L443.242 64.1536C445.011 64.1536 446.46 62.6235 446.46 60.7261V54.1158C453.977 51.5758 459.527 42.7928 459.527 32.3419V32.3112Z'
                  fill='#333333'
                />
              </svg>
              Locked Liquidity
            </div>
            <div className={style.tokenomicsCard__tax}>1% Tax On Buy/Sell</div>
            <div className={style.tokenomicsCard__label}>
              Contract Renounced
            </div>

            <div className={style.tokenomicsCard__person1}>
              <img src={person} alt='' />
            </div>
            <div className={style.tokenomicsCard__person2}>
              <img src={person2} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
