import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './Contacts.module.scss';
import man from './assets/man.svg';

const Contact = () => {
  return (
    <section id='contact' className={style.contact}>
      <div className={style.contact__man}>
        <img src={man} alt='' />
      </div>
      <div className='container'>
        <SectionTitle className={style.contact__title}>
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
          Contact Us
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
        <div className={style.contact__text}>
          $WWW represents a meme-based cryptocurrency characterized by its
          absence of intrinsic value or the expectation of generating financial
          returns. It lacks a formal team or a clearly outlined roadmap, making
          it a whimsical asset primarily designed for entertainment purposes.
        </div>
        <form className={style.contactBody}>
          <input
            type='text'
            placeholder='Name'
            className={style.contactBody__input}
          />
          <input
            type='text'
            placeholder='Email'
            className={style.contactBody__input}
          />
          <textarea
            name=''
            placeholder='Message'
            className={style.contactBody__input}
          ></textarea>
          <Button isBig className={style.contactBody__btn}>
            contact me
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
