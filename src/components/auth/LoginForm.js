import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <form style={styles.form} onSubmit={onHandleSubmit}>
      <label style={styles.label}>
        <span style={styles.text}> Email:</span>
        <input
          style={styles.input}
          type="text"
          name="email"
          autoComplete="off"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <br />
      <label style={styles.label}>
        <span style={styles.text}> Password:</span>
        <input
          style={styles.input}
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

// =================================================
// BEFORE HOOKS
// =================================================

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import authOperations from "../../redux/auth/authOperations";

// const styles = {
//   form: {
//     marginTop: 10,
//   },
//   label: {
//     marginRight: 5,
//     marginLeft: 5,
//   },
//   input: {
//     marginRight: 5,
//     marginBottom: 10,
//   },
//   text: {
//     marginRight: 15,
//   },
// };

// class LoginForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <form style={styles.form} onSubmit={this.onHandleSubmit}>
//         <label style={styles.label}>
//           <span style={styles.text}> Email:</span>
//           <input
//             style={styles.input}
//             type="text"
//             name="email"
//             autoComplete="off"
//             placeholder="Enter email"
//             onChange={this.onHandleChange}
//             value={email}
//           />
//         </label>
//         <br />
//         <label style={styles.label}>
//           <span style={styles.text}> Password:</span>
//           <input
//             style={styles.input}
//             type="password"
//             name="password"
//             autoComplete="off"
//             placeholder="Enter password"
//             onChange={this.onHandleChange}
//             value={password}
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginForm);
