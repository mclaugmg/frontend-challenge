const React = require('react');

const Petlist = ({ vacayData }) => {
  let petlist;
  if (vacayData.length) {
    petlist = vacayData.map(element => {
      // handle inconsistent description key naming
      const descriptionString = element.description || element.desciption;
      return (<div className="pet-info-block">
        <h1 className="user-name">{formatName(element.user.first, element.user.last)}</h1>
        <p className="title">{formatTitle(element.title)}</p>
        <p className="pet-name">{element.pet.name}</p>
        <p className="description">{formatDescription(descriptionString, 48)}</p>
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

// first letter in firstname/lastname capitalized, only first letter in lastname is shown
const formatName = (first, last) => {
  const formattedFirst = first.trim().charAt(0).toUpperCase() + first.substr(1);
  const formattedLast = `${last.trim().charAt(0).toUpperCase()}.`;
  return `${formattedFirst} ${formattedLast}`;
};

// trim unwanted whitespace in title
const formatTitle = title => {
  return title.trim().replace(/  +/g, ' ');
};

// format description to be cutoff length, but without splitting a word into parts
const formatDescription = (str, cutoff) => {
  str = str.trim().replace(/  +/g, ' ');
  if (str.length < cutoff) return str;
  // logic for detecting if char at end is part of a word
  if (str.charAt(cutoff - 1) !== ' ' && str.charAt(cutoff) !== ' ') {
    return `${str.substr(0, str.lastIndexOf(' '))}...`;
  }
  return `${str.substr(0, cutoff).trim()}...`;
};

Petlist.propTypes = {
  vacayData: React.PropTypes.array.isRequired,
};

module.exports = Petlist;
