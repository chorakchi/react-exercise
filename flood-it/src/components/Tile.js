import React from 'react';
import PropTypes from 'prop-types';

export class Tile extends React.Component {
  render() {
    const {color, width, height, style, onPress} = this.props;
    const mixedStyle = {...style, backgroundColor: color, width, height};
    const tile = <div style={mixedStyle}></div>;
    const touchableTile = <div onClick={onPress}>{tile}</div>;
    return onPress ? touchableTile : tile;
  }
}

Tile.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func
};

export default Tile;
