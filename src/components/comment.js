import React, {Component} from "react";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <h3>From ${this.props.comment.email}</h3>
        <p>{this.props.comment.body}</p>
      </div>
    );
  }
}
