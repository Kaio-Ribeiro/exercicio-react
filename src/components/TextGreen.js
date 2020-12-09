import React, {Component} from 'react';

export default class TextGreen extends Component {
  render() {
    return(
      <span className="textGreen">
        { this.props.children }
      </span>
    );
  }
}