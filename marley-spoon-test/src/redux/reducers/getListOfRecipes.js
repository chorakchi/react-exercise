import * as types from "../constants/ActionTypes";


export const getListOfRecipes = (state = {}, action) => {
  switch (action.type) {
    case types.GET_LIST_OF_RECIPES_RECEIVE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        asset: action.gets.includes.Asset,
        items: action.gets.items.map((item, i) => ({
          id: i,
          name: item.fields.name,
          title: item.fields.title,
          description: item.fields.description,
          calories: item.fields.calories,
          // chef : item.fields.chef,
          photo : item.fields.photo ? action.gets.includes.Asset[action.gets.includes.Asset.findIndex( asstItem => item.fields.photo.sys.id === asstItem.sys.id)].fields.file.url : null,
          tags: item.fields.tags ? item.fields.tags.map(item => item.fields.name) : null
        })),
      };
    case types.GET_LIST_OF_RECIPES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        didInvalidate: false
      };
    default:
      return state;
  }
};
