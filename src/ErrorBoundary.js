import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  // getDerivedStateFromError is a static method
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      console.log("setTimeout 5s...");
      setTimeout(() => this.setState({ redirect: true }), 3000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click here</Link> to go back to the home page or wait 5
          seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
