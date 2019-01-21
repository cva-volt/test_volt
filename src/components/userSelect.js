import React, {Component} from "react";

export default class UserSelect extends Component {
  render() {
    return (
      <select onChange={this.props.onChange} value={this.props.value}>
        {this.props.options.map(this.renderOption)}
      </select>
    );
  }

  renderOption(option) {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  }
}
