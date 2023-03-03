import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const NotFoundPage: React.FC = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found! Sorry about that.</h1>
    </main>
  );
};

export default NotFoundPage;
