import css from './Contact.module.css';
// import { CiUser } from "react-icons/ci";

export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.container}>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  );
}
