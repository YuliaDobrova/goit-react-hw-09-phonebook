import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

const styles = {
  form: {
    marginTop: 10,
  },
  label: {
    marginRight: 5,
    marginLeft: 5,
  },
  input: {
    marginRight: 5,
    marginBottom: 10,
  },
  text: {
    marginRight: 15,
  },
};

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form style={styles.form} onSubmit={this.onHandleSubmit}>
        <label style={styles.label}>
          <span style={styles.text}>Username:</span>
          <input
            style={styles.input}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter username"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.onHandleChange}
            value={name}
          />
        </label>
        <br />
        <label style={styles.label}>
          <span style={styles.text}> Email:</span>
          <input
            style={styles.input}
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Enter email"
            onChange={this.onHandleChange}
            value={email}
          />
        </label>
        <br />
        <label style={styles.label}>
          <span style={styles.text}>Password:</span>
          <input
            style={styles.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter password"
            onChange={this.onHandleChange}
            value={password}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    );
  }
}

// const mapDispatchProps = (dispatch) => {
//   onRegister: (data) => dispatch(authOperations.register(data));
// };

const mapDispatchProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchProps)(RegisterForm);
