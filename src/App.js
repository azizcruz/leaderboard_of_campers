import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let marked = require("marked");

class App extends Component {

state = {
  markdown:""
}

updateMarkdown(event) {
  this.setState({markdown: event})
}

  render() {

    

    return (
      <div className="container">
          <div>
            <h3 className="center blue-text">Markdown</h3>
            <textarea rows="" placeholder="Type something..." value={this.state.markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></textarea>
          </div>
          <div>
            <h3 className="center blue-text">Render</h3>
            <div className="render" dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}></div>
          </div>
      </div>
    )
      


    
  }
}

export default App;
