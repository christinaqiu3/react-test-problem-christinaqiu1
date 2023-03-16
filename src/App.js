import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // variable to keep track of if the button was clicked
      clicked: false
    };
  }

  render() {
    // sets the variable clicked to be the opposite of what it is currently
    const handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
    };

    return (
        <div>
          <p>Greetings!</p>
          <button type = "button" onClick = {handleClick}>
            { this.state.clicked ? "thanks" : "click me" }
          </button>
        </div>
    );
  }
}