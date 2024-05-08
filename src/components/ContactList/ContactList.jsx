import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({data}){
    return(
        <ul className={css.list}>
            {data.map(el => (
        <li key={el.id} className={css.listItem}>
          <Contact el={el} />
        </li>
      ))}
        </ul>
    )
}