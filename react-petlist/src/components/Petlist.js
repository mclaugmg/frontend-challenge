const React = require('react');

const Petlist = ({ vacayData }) => {
  let petlist;
  if (vacayData.length) {
    petlist = vacayData.map(element => {
      // handle inconsistent description key naming
      const descriptionString = element.description || element.desciption;
      return (<div className="pet-info-block">
        <h1 id="user-name">{formatName(element.user.first, element.user.last)}</h1>
        <p id="title">{formatTitle(element.title)}</p>
        <p id="description">{formatDescription(descriptionString, 48)}</p>
        <p id="pet-name">{element.pet.name}</p>
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
  const formattedFirst = first.trim().charAt(0).toUpperCase() + first.substr(1);
  const formattedLast = `${last.trim().charAt(0).toUpperCase()}.`;
  return `${formattedFirst} ${formattedLast}`;
};

const formatTitle = title => {
  return title.trim().replace(/  +/g, ' ');
};

const formatDescription = (str, cutoff) => {
  str = str.trim().replace(/  +/g, ' ');
  if (str.length < cutoff) return str;
  if (str.charAt(cutoff - 1) !== ' ' && str.charAt(cutoff) !== ' ') {
    return `${str.substr(0, str.lastIndexOf(' '))}...`;
  }
  return `${str.substr(0, cutoff).trim()}...`;
};

Petlist.propTypes = {
  vacayData: React.PropTypes.array.isRequired,
};

module.exports = Petlist;
