import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageBox: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      messageBox: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         name="message" 
         id="message"
         onChange={this.handleChange}
         value={this.state.messageBox}
        />
        <h5>Remaining characters: {this.props.maxChars - this.state.messageBox.length}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
