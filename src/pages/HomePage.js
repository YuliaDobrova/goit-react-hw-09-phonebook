import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../redux/auth/authSelectors";

const HomePage = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <>
      <h2>Personal Phonebook</h2>
      <br />
      <p>An application that won't let you forget an important info. 🤗 </p>
      <p>Please login or register to continue. </p>
      <p>
        If you are authorized, you can go to your
        {isAuthenticated ? (
          <NavLink to="/contacts" exact className="contactsNavLink">
            {" "}
            contacts
          </NavLink>
        ) : (
          <NavLink to="/login" exact className="contactsNavLink">
            {" "}
            contacts
          </NavLink>
        )}
        . 📘
      </p>
    </>
  );
};

export default HomePage;

// =================================================
// BEFORE HOOKS
// =================================================
// import React from 'react';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

// const HomeView = () => (
//   <div style={styles.container}>
//     <h1 style={styles.title}>
//       Приветственная страница нашего сервиса{' '}
//       <span role="img" aria-label="Иконка приветствия">
//         💁‍♀️
//       </span>
//     </h1>
//   </div>
// );

// export default HomeView;
