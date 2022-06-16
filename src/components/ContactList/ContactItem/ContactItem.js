import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useRemoveContactsMutation } from '../../../redux/contactsApi'

export default function ContactItem({ id, name, number }) {
  const [removeContact] = useRemoveContactsMutation()
  return (
    <li className={s.item} key={id}>
      {name}: {number}
      <button
        className={s.btn}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
