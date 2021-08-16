import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; //instead of 'connect'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import authOperations from "./redux/auth/authOperations";

export default function App() {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  // const mapDispatchToProps = {
  //   onGetCurrentUser: authOperations.getCurrentUser,
  // };

  // export default connect(null, mapDispatchToProps)(App);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

// =================================================
// BEFORE HOOKS
// =================================================

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";
// import authOperations from "./redux/auth/authOperations";

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <Main />
//       </>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
