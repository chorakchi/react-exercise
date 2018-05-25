import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {newGame} from '../actions';

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(newGame())
});

export class NewGame extends React.Component {
  render() {
    const {onPress} = this.props;

    return (
      <div onClick={onPress}>
        <img style={{width: 50, height: 50}}
        //  source={require('../../assets/icons/new-game.png')}
         />
      </div>
    );
  }
}

NewGame.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(NewGame);
