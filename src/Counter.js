// @flow
import React, { Component } from "react";

type Props = {
  interval: number,
  startingValue?: number
};

type State = {
  count: number
};

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: this.props.startingValue || 0
    };
  }

  increment = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      count: this.state.count + this.props.interval
    });
  };

  decrement = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      count: this.state.count - this.props.interval
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
