import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pagination from './Pagination';
import _ from 'underscore';


class FriendList extends Component {
  constructor() {
    super();

    // an example array of items to be paged
    var exampleItems = [].map((friend, index) => { return { id: index, friend: friend }; });

    this.state = {
      exampleItems: exampleItems,
        pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
}


onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}
  render () {
    if(this.state.exampleItems.length === this.props.friends.map((friend, index) => { return { id: index, friend: friend }; }).length){}
else{
  this.state.exampleItems = this.props.friends.map((friend, index) => { return { id: index, friend: friend }; })
}
    return (
      <div>
      <div >{this.state.pageOfItems.map(item =>
            <FriendListItem
            key={item.id}
            id={item.id}
            name={item.friend.name}
            gender={item.friend.gender}
            starred={item.friend.starred}
            {...this.props.actions} />
            
            )}
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                 <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
            </div>
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;