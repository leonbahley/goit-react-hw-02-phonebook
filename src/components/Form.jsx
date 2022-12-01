import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',

    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();
  handleChange = e =>
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    this.props.onSubmit({ ...this.state, id });
    this.reset();
  };
  reset = () =>
    this.setState({
      name: '',

      number: '',
    });
  render() {
    return (
      <form className={css.Form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          className={css.FormInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={this.telInputId}>Number</label>
        <input
          className={css.FormInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.telInputId}
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className={css.AddBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
