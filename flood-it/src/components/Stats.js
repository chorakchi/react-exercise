import React from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  currentLevel: state.currentLevel,
  maxMoves: state.maxMoves,
  spentMoves: state.spentMoves
});

export class Stats extends React.Component {
  render() {
    const {maxMoves, spentMoves} = this.props;

    return (
      <span 
      >{maxMoves - spentMoves}</span>
    );
  }
}

Stats.propTypes = {
  maxMoves: PropTypes.number.isRequired,
  spentMoves: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Stats);
