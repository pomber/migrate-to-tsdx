import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    } else if (this.state.error.element) {
      return this.state.error.element;
    } else {
      console.error(this.state.error);
      return <div error={this.state.error} />;
    }
  }
}

function MyComponent({ foo }) {
  let x = null;
  if (!foo) {
    x = { y: 1 };
  }
  console.log(x.y + '2');

  return <div>Hi 1</div>;
}

export default MyComponent;
