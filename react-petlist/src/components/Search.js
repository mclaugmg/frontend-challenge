const React = require('react');

const Search = props => {
  return (
    <div className="search-bar">
      <h1>Type of Vacay</h1>
      <div
        id="boarding"
        onClick={() => props.getVacayData('boarding')}
        className={props.filter === 'boarding' ? 'clicked' : ''}
      >
        <p>Boarding</p>
      </div>
      <div
        id="sitting"
        onClick={() => props.getVacayData('sitting')}
        className={props.filter === 'sitting' ? 'clicked' : ''}        
      >
        <p>Sitting</p>
      </div>
    </div>
  );
};

Search.propTypes = {
  filter: React.PropTypes.string.isRequired,
  getVacayData: React.PropTypes.func.isRequired,
};

module.exports = Search;
