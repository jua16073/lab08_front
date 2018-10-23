import * as types from '../types';

export const addPost = (
id,
title, 
body,
) => ({
  type: types.POST_ADDED,
  payload:{
    title,
    body,
  }
});

export const editPost = (
  id,
  title,
  body,
) => ({
  type: types.POST_EDITED,
  payload: {
    id,
    title,
    body,
  }
})

export const erastePost = (
id
) => ({
  type: types.POST_DELETED,
  payload:{
    id,
  }
})