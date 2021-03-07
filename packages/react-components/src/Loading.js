import React from "react";
import PropTypes from "prop-types";

const Loading = ({ children, ...props }) => (
  <span role="alert" aria-busy="true" aria-live="polite" {...props}>
    {children}
  </span>
);

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Loading;
