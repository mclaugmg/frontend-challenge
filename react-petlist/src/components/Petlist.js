const React = require('react');

const Petlist = ({ vacayData }) => {
  let petlist;
  if (vacayData.length) {
    petlist = vacayData.map(element => {
      const name = formatName(element.user.first, element.user.last);
      return (<div className="pet-info-block">
        <h2>{name}</h2>
        <h1>{element.title}</h1>
      </div>
      );
    });
  }

  return (
    <div id="petlist">
      {petlist || ''}
    </div>
  );
};

const formatName = (first, last) => {
  const formattedFirst = first.charAt(0).toUpperCase() + first.substr(1);
  const formattedLast = `${last.charAt(0).toUpperCase()}.`;
  return `${formattedFirst} ${formattedLast}`;
}

Petlist.propTypes = {
  vacayData: React.PropTypes.array.isRequired,
};

module.exports = Petlist;
