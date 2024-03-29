import React from 'react';
import './BlueButton.css'

class BlueButton extends React.Component {
    render() {
      return  <a
      href={this.props.link}
      className="btn blue2 blue-btn btn-rounded btn-lg home-btn-width"
      role="button"
      >{this.props.text}</a>
    }
}

export default BlueButton