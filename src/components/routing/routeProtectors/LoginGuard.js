import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

export const LoginGuard = props => {
  if (!localStorage.getItem("token")) {
    return props.children;
  }
  return <Redirect to="/game"/>;
};

LoginGuard.propTypes = {
  children: PropTypes.node
}