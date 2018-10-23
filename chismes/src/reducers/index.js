import {combineReducers} from 'redux';
import post, * as fromPost from './posts';

const reducer = combineReducers({
  post,
});

export default reducer;

export const getPosts = (state) => fromPost.getPosts(state.post);

export const getPost = (state, id) => fromPost.getPost(state.post, id);
