import css from './Contact.module.css';
// import { CiUser } from "react-icons/ci";

export default function Contact({el}) {
  return (
    
<div className={css.container}>
  <li>{el.name}</li>
  <li>{el.phone}</li>
</div>
  )
}
