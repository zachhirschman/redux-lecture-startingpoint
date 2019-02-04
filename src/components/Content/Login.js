import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Login!</h1>
        {/* save the onchange value to localstate and the submitted will value will get passed back to the parent */}
        <input />
        <button>Submit</button>
      </div>
    );
  }
}
