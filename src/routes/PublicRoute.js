import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../redux/auth/authSelectors";

export default function PublicRoute({
  component: Component,
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

// ==============================================
// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { getIsAuthenticated } from "../redux/auth/authSelectors";

// /**
//  * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
//  * - В противном случае рендерит компонент
//  */
// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
