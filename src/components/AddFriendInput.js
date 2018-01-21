import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';
import man from './../man.svg';
import woman from './../woman.svg';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <div onChange={this.setGender.bind(this)} className={classnames(styles.addFriendInputredio)} >
        <img className={classnames(styles.opacity)} src={man} width='20'height='20'  alt="logo" />/<img src={woman} width='20'height='20' className={classnames(styles.opacity)} alt="logo" />
        <input type="radio" value="MALE" name="gender" defaultChecked/> <span>Male &nbsp;</span>
        <input type="radio" value="FEMALE" name="gender"/> <span>Female </span>
      </div>
        <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
      </div>
    );
  }

  constructor (props) {
    super(props);
    this.state = {
      name: this.props.name || '',
    };
    this.state = {
      gender: 'MALE',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  setGender(e) {
    this.setState({ gender: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    const gender = this.state.gender
    if (e.which === 13) {
      this.props.addFriend(name , gender);
      this.setState({ name: '' });
      console.log(this.props.gender);
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
