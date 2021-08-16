import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { MainContainer } from "./MainStyled";
import { lazy } from "react";
import Loader from "react-loader-spinner";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const HomePage = lazy(
  () => import("../../pages/HomePage") /* webpackChunkName:"HomePage" */
);
const ContactsPage = lazy(
  () => import("../../pages/ContactsPage") /* webpackChunkName:"ContactsPage" */
);
const RegisterPage = lazy(
  () => import("../../pages/RegisterPage") /* webpackChunkName:"RegisterPage" */
);
const LoginPage = lazy(
  () => import("../../pages/LoginPage") /* webpackChunkName:"LoginPage" */
);

const Main = () => {
  return (
    <MainContainer>
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#40e0d0" height={70} width={70} />
        }
      >
        <Switch>
          <PublicRoute path="/" exact>
            <HomePage />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/">
            <ContactsPage />
          </PrivateRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterPage />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;

// ======================================
// BEFORE HOOKS
// ======================================

// import React, { Suspense } from "react";
// import { Switch } from "react-router-dom";
// import { MainContainer } from "./MainStyled";
// import { lazy } from "react";
// import Loader from "react-loader-spinner";
// import PrivateRoute from "../../routes/PrivateRoute";
// import PublicRoute from "../../routes/PublicRoute";

// const lazyHomePage = lazy(
//   () => import("../../pages/HomePage") /* webpackChunkName:"HomePage" */
// );
// const lazyContactsPage = lazy(
//   () => import("../../pages/ContactsPage") /* webpackChunkName:"ContactsPage" */
// );
// const lazyRegisterPage = lazy(
//   () => import("../../pages/RegisterPage") /* webpackChunkName:"RegisterPage" */
// );
// const lazyLoginPage = lazy(
//   () => import("../../pages/LoginPage") /* webpackChunkName:"LoginPage" */
// );

// const Main = () => {
//   return (
//     <MainContainer>
//       <Suspense
//         fallback={
//           <Loader type="ThreeDots" color="#40e0d0" height={70} width={70} />
//         }
//       >
//         <Switch>
//           <PublicRoute path="/" exact component={lazyHomePage} />
//           <PrivateRoute
//             path="/contacts"
//             component={lazyContactsPage}
//             redirectTo="/"
//           />
//           <PublicRoute
//             path="/register"
//             restricted
//             component={lazyRegisterPage}
//             redirectTo="/contacts"
//           />
//           <PublicRoute
//             path="/login"
//             restricted
//             component={lazyLoginPage}
//             redirectTo="/contacts"
//           />
//         </Switch>
//       </Suspense>
//     </MainContainer>
//   );
// };

// export default Main;
