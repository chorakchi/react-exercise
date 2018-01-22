# react-interview-exercise
 pagination support, male/female and display it, add tests

## Usage

```
yarn install
yarn start
open http://localhost:3000

yarn test
```

## description

added tests to reducers, action, and components with 'Jest' as the default  test tool of the framework
and for components use the 'Enzyme' as utility for React that makes it easier to assert, manipulate, and traverse React Components

## change

These files added to the project

```shell
├── src
│   ├── actions
│   │   └── FriendsActions.test.js
│   ├── components
│   │   ├── AddFriendInput.test.js
│   │   ├── FriendList.test.js
│   │   ├── FriendListItem.test.js
│   │   ├── GenderInput.css
│   │   ├── GenderInput.js
│   │   ├── GenderInput.test.js
│   │   ├── Pagination.css
│   │   ├── Pagination.js
│   │   └── Pagination.test.js
│   ├── components
│   │   ├── App.test.js
│   │   └── FriendListApp.test.js
│   ├── reducers
│   │   └── friendlist.test.js
│   ├── man.svg
│   └── woman.svg

```

## Documentation & resource

```shell
http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google
https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs
https://codepen.io/cornflourblue/pen/oZZzLr
https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md

```

<p align="center">
  <a href="https://reactjs.org/"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K?style=flat-square" alt="React"></a>
</p>
