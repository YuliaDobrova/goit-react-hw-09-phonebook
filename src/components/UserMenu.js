import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../redux/auth/authSelectors";
import authOperations from "../redux/auth/authOperations";
import defaultAvatar from "../images/user.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 20,
  },
};

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt={name} width="24" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}

// =================================================
// BEFORE HOOKS
// =================================================

// import React from "react";
// import { connect } from "react-redux";
// import { getUserName } from "../redux/auth/authSelectors";
// import authOperations from "../redux/auth/authOperations";
// import defaultAvatar from "../images/user.png";

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 20,
//   },
// };

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div style={styles.container}>
//     <img src={avatar} alt={name} width="24" style={styles.avatar} />
//     <span style={styles.name}>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = (state) => ({
//   name: getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
