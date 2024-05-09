import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <>
      <div>
        <div className={css.contactName}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactName}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
