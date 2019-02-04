import React, { Component } from "react";

export default class Apply extends Component {
  render() {
    return (
      <div>
        {this.props.user ? "Special Savings Promo for: " : null}
        {/* UserName component from the header folder */}
      </div>
    );
  }
}
