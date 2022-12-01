import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const ContactsList = ({ contacts, onClick }) => (
  <>
    <ul className={css.List}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.ListItem} id={id} key={id}>
          {name}: {number}
          <button
            className={css.DeleteBtn}
            type="button"
            onClick={() => onClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactsList;
