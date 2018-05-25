import * as actions from './FriendsActions'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a freind', () => {
    const name = 'Mohammad'
    const gender = 'MALE'
    const expectedAction = {
      type: types.ADD_FRIEND,
      name,
    gender
    }
    expect(actions.addFriend(name, gender)).toEqual(expectedAction)
  })
})

describe('actions', () => {
    it('should create an action to delete a freind', () => {
      const id = '0'
      const expectedAction = {
        type: types.DELETE_FRIEND,
        id
      }
      expect(actions.deleteFriend(id)).toEqual(expectedAction)
    })
  })

  describe('actions', () => {
    it('should create an action to star a freind', () => {
      const id = '0'
      const expectedAction = {
        type: types.STAR_FRIEND,
        id
      }
      expect(actions.starFriend(id)).toEqual(expectedAction)
    })
  })


