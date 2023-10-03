import { useMediaQuery } from 'usehooks-ts';
import SectionTitle from '../../components/SectionTitle';
import style from './Roadmap.module.scss';
import RoadmapCard from './components/Card';
import roadmapList from './roadmapList.js';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const RoadmapSection = () => {
  const isMobile = useMediaQuery('(max-width:991px)');

  return (
    <section className={style.roadmap}>
      <div className='container'>
        <SectionTitle className={style.roadmap__title}>
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
          Road map
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
        {!isMobile && (
          <div className={style.roadmapBody}>
            {roadmapList.map((item, index) => (
              <RoadmapCard index={index} list={item} key={index} />
            ))}
          </div>
        )}
        {isMobile && (
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className={style.roadmapSlider}
          >
            {roadmapList.map((item, index) => (
              <SwiperSlide key={index} className={style.roadmapSlider__slide}>
                <RoadmapCard index={index} list={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default RoadmapSection;
