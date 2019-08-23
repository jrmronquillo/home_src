import React, { Component } from 'react';

class ToggleMenu extends Component {
  render() {
    // ...
    return (
      <div className="toggle-menu">
        <div className="hamburger">
          <div className="iconBar" />
          <div className="iconBar" />
          <div className="iconBar" />
        </div>
      </div>
    );
  }
}

export default ToggleMenu;
