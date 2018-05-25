import  reducer from './friendlist'
import * as types from './../constants/ActionTypes'

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      gender: 'MALE',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      gender: 'MALE',
      starred: false
    },
    {
      name: 'George Washington',
      gender: 'MALE',
      starred: false
    }
  ]
};
describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should return the initial state', () => {
    expect(reducer(initialState,
              {
                type: types.ADD_FRIEND,
                name: 'Mohammad',
                gender: 'MALE',
              })).toEqual({
                friendsById: [
                  {
                    name: 'Theodore Roosevelt',
                    gender: 'MALE',
                    starred: true
                  },
                  {
                    name: 'Abraham Lincoln',
                    gender: 'MALE',
                    starred: false
                  },
                  {
                    name: 'George Washington',
                    gender: 'MALE',
                    starred: false
                  },
                  {
                    name: 'Mohammad',
                    gender: 'MALE'
                  }
                ]
              });
  });
})
