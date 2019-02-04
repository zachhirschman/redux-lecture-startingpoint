import React, { Component } from "react";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(value){
    this.setState({
      name:value
    })
  }

  render() {
    return (
      <div>
        <h1>Login!</h1>
        {/* save the onchange value to localstate and the submitted will value will get passed back to the parent */}
        <input value = {this.state.name} onChange ={(e) =>{this.handleChange(e.target.value)}} />
        <button onClick={() => this.props.login(this.state.name)}>Submit</button>
      </div>
    );
  }
}
