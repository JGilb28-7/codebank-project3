import React from 'react';
import './blueButton.css'

class BlueButton extends React.Component {
    render() {
      return  <a
      href={this.props.link}
      class="btn blue2 blue-btn btn-rounded btn-lg home-btn-width"
      role="button"
      >{this.props.text}</a>
    }
}

export default BlueButton