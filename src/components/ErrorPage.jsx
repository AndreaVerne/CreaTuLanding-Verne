import React from "react";

const ErrorPage = ({message}) => {
  return (
    <div className="page-error">
      <h1>{message}</h1>
      <a className="btn btn-error mt-2" href="/">
        Volver al inicio
      </a>
    </div>
  );
};

export default ErrorPage;
