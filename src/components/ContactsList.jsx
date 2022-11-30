import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onClick }) => (
  <>
    <ul className="List">
      {contacts.map(({ id, name, number }) => (
        <li className="ListItem" id={id} key={id}>
          {name}: {number}
          <button className="DeleteBtn" type="button" onClick={onClick}>
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
