import React, { Component } from 'react';
import { nanoid } from 'nanoid';
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
      <form className="Form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          className="FormInput"
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
          className="FormInput"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.telInputId}
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className="AddBtn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
