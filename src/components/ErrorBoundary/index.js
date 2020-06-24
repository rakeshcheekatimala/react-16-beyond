import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {};

  static getDerivedStateFromError(error) {
    // whenever error occurs this method is called first
    // and the error thrown is passed as an argument
    console.log(`Error log from getDerivedStateFromError: ${error}`);
    // whatever you return from this method is the state of the component
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // this method is called when  the descendant component throws error
    console.log(`Error log from componentDidCatch: ${error}`);
    // make an API call here to send the information about the error to third party API Service
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
