import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoaderComponent = () => {
  return (
    <div className="center mt-2">
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default LoaderComponent;
