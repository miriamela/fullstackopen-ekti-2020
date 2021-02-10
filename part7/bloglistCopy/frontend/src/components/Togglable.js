import React, { useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={hideWhenVisible}>
        <Button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={toggleVisibility}
        >
          cancel
        </Button>
      </div>
    </div>
  );
});
export default Togglable;
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
