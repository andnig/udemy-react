/* eslint-disable react/prop-types */
import React, { Component } from "react";

// Any component wrapped with this component does not crash the app in production mode (but still in dev mode)
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  // eslint-disable-next-line no-unused-vars
  componentDidCatch = (error, _info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
