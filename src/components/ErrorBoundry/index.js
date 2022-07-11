import React from "react";
import Four04 from "./Four04";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <Four04 />;
    }

    return children;
  }
}
