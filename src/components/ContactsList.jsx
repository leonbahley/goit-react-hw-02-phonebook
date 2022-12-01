import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const ContactsList = ({ contacts, onClick }) => (
  <>
    <ul className={css.List}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.ListItem} id={id} key={id}>
          {name}: {number}
          <button className={css.DeleteBtn} type="button" onClick={onClick}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactsList;
