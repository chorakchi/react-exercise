import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'
import * as contentful from 'contentful'
// import {statusAPI } from "./statusAPI"
// import {snackbarTrigger } from "./snackbarTrigger"

var client = contentful.createClient({
  space: global.space,
  accessToken: global.accessToken })

const getListOfRecipesRequest = () => {
  return {
    type: types.GET_LIST_OF_RECIPES_REQUEST
  };
}

const getListOfRecipesReceive = (json) => {
  return {
    type: types.GET_LIST_OF_RECIPES_RECEIVE,
    gets: json,
    receivedAt: Date.now()
  }
}

export const fetchListOfRecipes = (data) => dispatch => {
  dispatch(getListOfRecipesRequest())

  return client.getEntries().then(entries => {
    
    dispatch(getListOfRecipesReceive(entries))
  })
}
