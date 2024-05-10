import css from './App.module.css';
import { useState, useEffect } from 'react';
import initialContacts from '../../dataUsers.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify({contacts}));
  }, [contacts]);

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

  const visibleContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
