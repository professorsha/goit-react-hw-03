import css from './App.module.css';
import { useState } from 'react'; 
import data from '../../dataUsers.json';
// import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange=(newSearch)=>{
    setInputValue(newSearch);
    console.log(newSearch);
  }

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox value={inputValue} onSelect={handleChange}/> 
         <ContactList contacts={data}/>
      </div>
    </>
  );
}
