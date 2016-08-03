const React = require('react');
const ReactDOM = require('react-dom');
// const Test = require('components/Test');
const CSS = require('./index.css');

const dest = document.getElementById('content');

const App = React.createClass({
  getInitialState() {
    return {
    };
  },

  render() {
    return (
      <div>Hello, world</div>
    );
  },
});

ReactDOM.render(<App />, dest);

window.React = React; // enable debugger
