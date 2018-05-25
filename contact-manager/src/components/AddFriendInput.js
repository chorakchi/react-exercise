import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';
import GenderInput from './GenderInput';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <GenderInput ref={foo => {this.foo = foo;}} className={classnames(styles.addFriendInputredio)} values={["MALE","FEMALE"]} label={["Mele","Female"]} name={"gender"}/>
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
    console.log(this.foo.getInitialState());
    this.setState({ gender: this.foo.getInitialState().gender });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    console.log(this.foo.getInitialState().gender);
    const gender = this.foo.getInitialState().gender
    if (e.which === 13) {
      this.props.addFriend(name , gender);
      this.setState({ name: '' });
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
