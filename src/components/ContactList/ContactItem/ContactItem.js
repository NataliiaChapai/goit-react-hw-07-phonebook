import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './ContactItem.module.css';
import { useRemoveContactsMutation } from '../../../redux/contactsApi'
import { SpinnerCircular } from 'spinners-react';


export default function ContactItem({ id, name, number }) {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();
  function onRemoveContact(id) {
    removeContact(id);
    Notify.info(`The contact with id ${id} was deleted`);
  }

  return (<>
    <li className={s.item} key={id}>
      <p>{name}</p>
      <p className={s.phone}>{number}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => onRemoveContact(id)}
      >
        Delete
      </button>
    </li>
    {isLoading && <SpinnerCircular size="30" />}
  </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
