import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const width = 100

const mapStateToProps = state => ({
  field: state.field
});

export class Grid extends React.Component {
  makeRow(rowIndex, tiles) {
    const size = Math.sqrt(tiles.length);

    return (
      <div key={rowIndex} style={{display: 'inlin-block'}}>
        {tiles.slice(rowIndex * size, rowIndex * size + size)}
      </div>
    );
  }

  makeGrid(size, tiles) {
    return Array
      .from({length: size})
      .map((_, i) => this.makeRow(i, tiles));
  }

  render() {
    const {field} = this.props;
    const size = Math.sqrt(field.length);
    const tileSize = Math.ceil(width / size);
    const tiles = field.map((cell, i) => <Tile key={i} color={COLORS[cell]} width={tileSize} height={tileSize}/>);

    return <div >{this.makeGrid(size, tiles)}</div>;
  }
}

Grid.propTypes = {
  field: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Grid);
