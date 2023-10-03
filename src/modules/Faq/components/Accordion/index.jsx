import style from './Accordion.module.scss';
import { useRef, useState } from 'react';

const Accordion = ({ faq, index }) => {
  const { question, answer } = faq;
  const contentEl = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className={`${style.accordion} ${clicked && style.active}`}>
      <button onClick={handleToggle} className={style.accordion__btn}>
        <p>{question}</p>
        <span className={style.accordion__arrow}>
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_1366_2278)'>
              <mask id='path-1-inside-1_1366_2278' fill='white'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M28.2502 9H21.3183V17.3183H13V24.2502L21.3183 24.2502V32.5684H28.2502V24.2502L36.5684 24.2502V17.3183H28.2502V9Z'
                />
              </mask>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M28.2502 9H21.3183V17.3183H13V24.2502L21.3183 24.2502V32.5684H28.2502V24.2502L36.5684 24.2502V17.3183H28.2502V9Z'
                fill='#FEBE63'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M28.2502 9H21.3183V17.3183H13V24.2502L21.3183 24.2502V32.5684H28.2502V24.2502L36.5684 24.2502V17.3183H28.2502V9Z'
                fill='url(#paint0_linear_1366_2278)'
                fill-opacity='0.27'
              />
              <path
                d='M21.3183 9V8H20.3183V9H21.3183ZM28.2502 9H29.2502V8H28.2502V9ZM21.3183 17.3183V18.3183H22.3183V17.3183H21.3183ZM13 17.3183V16.3183H12V17.3183H13ZM13 24.2502H12V25.2502H13L13 24.2502ZM21.3183 24.2502H22.3183V23.2502H21.3183V24.2502ZM21.3183 32.5684H20.3183V33.5684H21.3183V32.5684ZM28.2502 32.5684V33.5684H29.2502V32.5684H28.2502ZM28.2502 24.2502V23.2502H27.2502V24.2502H28.2502ZM36.5684 24.2502V25.2502H37.5684V24.2502H36.5684ZM36.5684 17.3183H37.5684V16.3183H36.5684V17.3183ZM28.2502 17.3183H27.2502V18.3183H28.2502V17.3183ZM21.3183 10H28.2502V8H21.3183V10ZM22.3183 17.3183V9H20.3183V17.3183H22.3183ZM13 18.3183H21.3183V16.3183H13V18.3183ZM14 24.2502V17.3183H12V24.2502H14ZM21.3183 23.2502L13 23.2502L13 25.2502H21.3183V23.2502ZM22.3183 32.5684V24.2502H20.3183V32.5684H22.3183ZM28.2502 31.5684H21.3183V33.5684H28.2502V31.5684ZM27.2502 24.2502V32.5684H29.2502V24.2502H27.2502ZM36.5684 23.2502L28.2502 23.2502V25.2502L36.5684 25.2502V23.2502ZM35.5684 17.3183V24.2502H37.5684V17.3183H35.5684ZM28.2502 18.3183H36.5684V16.3183H28.2502V18.3183ZM27.2502 9V17.3183H29.2502V9H27.2502Z'
                fill='#CC8843'
                mask='url(#path-1-inside-1_1366_2278)'
              />
              <path
                d='M21.3183 9V8H20.3183V9H21.3183ZM28.2502 9H29.2502V8H28.2502V9ZM21.3183 17.3183V18.3183H22.3183V17.3183H21.3183ZM13 17.3183V16.3183H12V17.3183H13ZM13 24.2502H12V25.2502H13L13 24.2502ZM21.3183 24.2502H22.3183V23.2502H21.3183V24.2502ZM21.3183 32.5684H20.3183V33.5684H21.3183V32.5684ZM28.2502 32.5684V33.5684H29.2502V32.5684H28.2502ZM28.2502 24.2502V23.2502H27.2502V24.2502H28.2502ZM36.5684 24.2502V25.2502H37.5684V24.2502H36.5684ZM36.5684 17.3183H37.5684V16.3183H36.5684V17.3183ZM28.2502 17.3183H27.2502V18.3183H28.2502V17.3183ZM21.3183 10H28.2502V8H21.3183V10ZM22.3183 17.3183V9H20.3183V17.3183H22.3183ZM13 18.3183H21.3183V16.3183H13V18.3183ZM14 24.2502V17.3183H12V24.2502H14ZM21.3183 23.2502L13 23.2502L13 25.2502H21.3183V23.2502ZM22.3183 32.5684V24.2502H20.3183V32.5684H22.3183ZM28.2502 31.5684H21.3183V33.5684H28.2502V31.5684ZM27.2502 24.2502V32.5684H29.2502V24.2502H27.2502ZM36.5684 23.2502L28.2502 23.2502V25.2502L36.5684 25.2502V23.2502ZM35.5684 17.3183V24.2502H37.5684V17.3183H35.5684ZM28.2502 18.3183H36.5684V16.3183H28.2502V18.3183ZM27.2502 9V17.3183H29.2502V9H27.2502Z'
                fill='url(#paint1_linear_1366_2278)'
                fill-opacity='0.27'
                mask='url(#path-1-inside-1_1366_2278)'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_1366_2278'
                x='0'
                y='0'
                width='49.5685'
                height='49.5684'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='6.5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_1366_2278'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_1366_2278'
                  result='shape'
                />
              </filter>
              <linearGradient
                id='paint0_linear_1366_2278'
                x1='24.7842'
                y1='32.6065'
                x2='24.7842'
                y2='9'
                gradientUnits='userSpaceOnUse'
              >
                <stop />
                <stop offset='0.458019' />
                <stop offset='0.463023' stop-opacity='0' />
                <stop offset='1' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_1366_2278'
                x1='24.7842'
                y1='32.6065'
                x2='24.7842'
                y2='9'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-opacity='0.87' />
                <stop offset='0.457919' stop-opacity='0' />
                <stop offset='0.458019' />
                <stop offset='0.703125' stop-opacity='0' />
                <stop offset='1' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </button>
      <div
        ref={contentEl}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
        className={style.accordion__content}
      >
        <div className={style.accordion__answer}>
          {answer.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
