import { useRef, useState } from 'react';
import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './Contacts.module.scss';
import man from './assets/man.svg';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const thisForm = useRef(null);
  const [isSent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    let formData = new FormData(thisForm.current);

    let xhr = new XMLHttpRequest();

    console.log('formData', formData);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        setSent(true);

        if (xhr.status === 200) {
          console.log('Mail send');
        }

        setTimeout(() => {
          setSent(false);
        }, 4000);
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.current.reset();
  };

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
        <form
          ref={thisForm}
          onSubmit={handleSubmit(onSubmit)}
          className={style.contactBody}
        >
          <input
            {...register('name', { required: true })}
            type='text'
            placeholder='Name'
            className={`${style.contactBody__input} ${
              errors.name && style._err
            }`}
          />
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '',
              },
            })}
            type='text'
            placeholder='Email'
            className={`${style.contactBody__input} ${
              errors.email && style._err
            }`}
          />
          <textarea
            {...register('message', { required: true })}
            placeholder='Message'
            className={`${style.contactBody__input} ${
              errors.message && style._err
            }`}
          ></textarea>
          <Button isBig className={style.contactBody__btn}>
            contact me
          </Button>
        </form>

        {isSent && (
          <div className={style.contact__success}>
            Message sent successfully
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
