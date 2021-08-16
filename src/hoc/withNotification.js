import { useSelector, useDispatch } from "react-redux";
import { getAuthError } from "../redux/auth/authSelectors";
import { useEffect } from "react";
import { resetError } from "../redux/auth/authActions";

const withNotification = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const authError = useSelector(getAuthError);

    useEffect(() => {
      if (authError) {
        alert(authError);
      }
    }, [authError]);

    useEffect(() => {
      return () => {
        dispatch(resetError());
      };
    }, [dispatch]);

    return <WrappedComponent {...props} />;
  };
};

// {
//   /* <WrappedComponent/> */
// }
const Wrapper = () => {
  return <h2>Wrapper</h2>;
};
// const NewWrapper = withNotification(Wrapper);
withNotification(Wrapper);

export default withNotification;

// ==================
// const NewWrappedComponent = (props) => {
//   return <WrappedComponent {...props} />;
// };
// return NewWrappedComponent;
