import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";

const ErrorPage = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default ErrorPage;
