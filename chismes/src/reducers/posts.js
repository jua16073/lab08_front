import * as types from '../types';
import {combineReducers} from 'redux'

const byId = (state = {}, action) => {
  switch(action.type){
    case types.POST_ADDED:{
      const id = action.payload.id
      return {
        ...state,
        [id]:{
          ...action.payload,
        }
      };
    }

    case types.POST_EDITED:{
      const id = action.payload.id;
      const {titulo, body} = state[id];
      return {
        ...state,
        [id]:{
          ...post,
          titulo: titulo,
          body: body,
        }
      };
    }
      
    case types.POST_DELETED:{
      const id = action.payload.id;
      const newstate = {...state}
      delete newstate[id];
      return newstate;
    }
      
    
    default:
      return state;
  }
};

const order = (state = [], action) =>{
  switch(action.type){
    case types.POST_ADDED:{
      const id = action.payload.id;
      return[
        ...state,
        id
      ];
    }
    default:
      return state;
  }
}

const post = combineReducers({
  byId,
  order,
});

export default post;

export const getPost = (state, id) => state.byId[id];

export const getPosts = (state) => state.order.map(
  id=>getPost(state, id)
);