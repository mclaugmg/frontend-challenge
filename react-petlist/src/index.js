const React = require('react');
const ReactDOM = require('react-dom');
const CSS = require('./index.scss');
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

  // get API data when the component will mount first time
  componentWillMount() {
    this.getVacayData('none');
  },

  // leaving console.log in to show different API endpoint interactions
  getVacayData(filter) {
    if (filter === this.state.filter) filter = 'none';
    let url = 'http://localhost:3000/static/search.json';
    if (filter === 'boarding') url += '?service=boarding';
    else if (filter === 'sitting') url += '?service=sitting';
    console.log('url is ', url);

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        const searchResult = JSON.parse(xmlhttp.responseText);
        this.setState({ vacayData: searchResult.search, filter });
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  },

  render() {
    return (
      <div id="petlist-container">
        <Search
          filter={this.state.filter}
          getVacayData={this.getVacayData}
        />
        <Petlist
          vacayData={this.state.vacayData}
        />
      </div>
    );
  },
});

ReactDOM.render(<App />, dest);

window.React = React; // enable debugger
