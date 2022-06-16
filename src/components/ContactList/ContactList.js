import React from 'react';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { getFilter } from '../../redux/contactsSlice';

export default function ContactList() {
  const filterContact = useSelector(getFilter);
  const { data: contacts, isSuccess } = useGetContactsQuery();

  if (!isSuccess) {
    return;
  }
  
  const formData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );
  
  return (
    <ul className={s.list}>
      {contacts &&
      (formData.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={phone}
        />
      )))}
    </ul>
  );
}