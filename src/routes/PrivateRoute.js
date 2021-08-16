import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../redux/auth/authSelectors";

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// ===================================================
// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { getIsAuthenticated } from "../redux/auth/authSelectors";

// /**
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на /login
//  */
// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
