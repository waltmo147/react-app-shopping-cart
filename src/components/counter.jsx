import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: []
    // imageUrl: "https://picsum.photos/200"
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // handleIncrement = product => {
  //   // console.log("Increment clicked", this);
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // make Ajax call and get new data from the server
      console.log("make Ajax call and get new data from the server");
    }
  }

  // like onFinish
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    // console.log("props", this.props.counter);
    console.log("Counter - Rendered");

    return (
      <div>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
