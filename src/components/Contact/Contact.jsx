import css from './Contact.module.css';
// import { CiUser } from "react-icons/ci";

export default function Contact({ contact: { name, number,id },onDelete }) {
  return (
    <div className={css.container}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={()=>{onDelete(id)}}>Delete</button>
    </div>
  );
}
