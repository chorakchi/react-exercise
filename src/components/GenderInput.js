import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './GenderInput.css';
import man from './../man.svg';
import woman from './../woman.svg';

class genderInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      gender: 'MALE',
    };
  }

  getInitialState() {
    return {
        gender: this.state.gender,
    };
  }

  setGender(e) {
    this.setState({ gender: e.target.value });
  }

  render () {
    return (
    <div onChange={this.setGender.bind(this)}  className={classnames(styles.addFriendInputRedio)} >
        <img className={classnames(styles.opacity)} src={man} width='20'height='20'  alt="logo" />/<img src={woman} width='20'height='20' className={classnames(styles.opacity)} alt="logo" />
        <input type="radio" value={this.props.values[0]} name="gender" defaultChecked/> <span>{this.props.label[0]} &nbsp;</span>
        <input type="radio" value={this.props.values[1]} name="gender"/> <span>{this.props.label[1]} </span>
      </div>
    )
}
}
  
  export default genderInput