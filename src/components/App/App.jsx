import css from './App.module.css';
import { useState } from 'react';
import initialContacts from '../../dataUsers.json';
import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const addContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };
  const deleteContact = idContact => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== idContact);
    });
  };
  // const handleChange=(newSearch)=>{
  //   setInputValue(newSearch);
  //   console.log(newSearch);
  // }

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        {/* <SearchBox value={inputValue} onSelect={handleChange}/>  */}
        <ContactList contacts={contacts} onDelete={deleteContact}/>
      </div>
    </>
  );
}
