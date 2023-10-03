import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './Dont.module.scss';

const Dont = () => {
  return (
    <section className={style.dont}>
      <div className='container'>
        <div className={style.dontBody}>
          <SectionTitle className={style.dontBody__title}>
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
            Don't Miss Out!
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
          <div className={style.dontBody__text}>
            So, are you ready to rustle up some digital gold? Don't let this
            wagon train pass you by! Click that BUY NOW button below and stake
            your claim in the wildest ride the crypto frontier has ever seen.
            Saddle up and invest in $WWW today – the Wild Wild West awaits!
          </div>
          <Button isBig className={style.dontBody__btn}>
            BUY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dont;
