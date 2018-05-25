import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';
import man from './../man.svg';
import woman from './../woman.svg';

class FriendListItem extends Component {

  render() {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
          <div>
          {this.props.gender === 'MALE' ? <img src={man} width='20'height='20' className={classnames(styles.opacity)} alt="logo" />: <img src={woman} width='20'height='20' className={classnames(styles.opacity)} alt="logo" />}
          
            <small>{this.props.gender}</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem
