import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { MainContainer } from "./MainStyled";
import { lazy } from "react";
import Loader from "react-loader-spinner";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
// import { mainRoutes } from "../../routes/mainRoutes";

const lazyHomePage = lazy(
  () => import("../../pages/HomePage") /* webpackChunkName:"HomePage" */
);
const lazyContactsPage = lazy(
  () => import("../../pages/ContactsPage") /* webpackChunkName:"ContactsPage" */
);
const lazyRegisterPage = lazy(
  () => import("../../pages/RegisterPage") /* webpackChunkName:"RegisterPage" */
);
const lazyLoginPage = lazy(
  () => import("../../pages/LoginPage") /* webpackChunkName:"LoginPage" */
);
// ======================================

const Main = () => {
  return (
    <MainContainer>
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#40e0d0" height={70} width={70} />
        }
      >
        <Switch>
          {/* {mainRoutes.map((route) => (
         <Route
           path={route.path}
           exact={route.exact}
           component={route.component}
           key={route.path}
          />
         ))} */}
          <PublicRoute path="/" exact component={lazyHomePage} />
          <PrivateRoute
            path="/contacts"
            component={lazyContactsPage}
            redirectTo="/"
          />
          <PublicRoute
            path="/register"
            restricted
            component={lazyRegisterPage}
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            restricted
            component={lazyLoginPage}
            redirectTo="/contacts"
          />
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
