const React = require('react');
const ReactDOM = require('react-dom');
const CSS = require('./index.scss');
// const Test = require('components/Test');
const Search = require('./components/Search.js');
const Petlist = require('./components/Petlist.js');

const dest = document.getElementById('content');

const App = React.createClass({
  getInitialState() {
    return {
      filter: 'none',
      vacayData: [],
    };
  },

  componentWillMount() {
    this.getVacayData();
  },

  getVacayData() {
    let url = 'http://localhost:3000/static/search.json';
    if (this.state.filter === 'boarding') url += '?service=boarding';
    else if (this.state.filter === 'sitting') url += '?service=sitting';

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        const searchResult = JSON.parse(xmlhttp.responseText);
        this.updatePetlist(searchResult);
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  },

  updatePetlist(searchResult) {
    this.setState({ vacayData: searchResult.search });
  },

  render() {
    return (
      <div id="petlist-container">
        <Search />
        <Petlist
          vacayData={this.state.vacayData}
        />
      </div>
    );
  },
});

ReactDOM.render(<App />, dest);

window.React = React; // enable debugger
