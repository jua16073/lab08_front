import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

import * as selectors from '../../reducers';

const Chisme = ({
  id, 
  title,
  body,
  to_read,
  to_edit,
  erase,
}) => (
  <Fragment>
    <p>{title}</p>


    <button onClick = {
      () => {
        to_read();
      }
    }
    >Mas</button>


    <button onClick = {
      () => {
        to_edit();
      }
    }
    >Editar</button>

    <button onClick = {
      () => {
        erase();
      }
    }
    >Borrar</button>
  </Fragment>
);

export default connect(
  (state, {id}) => ({
    ...selectors.getPost(state, id),
  }),
  (dispatch, {id}) => ({
    to_read(id){
      console.log("Leer");
    },
    to_edit(id){
      console.log("Editar");
    },
    erase(id){
      dispatch(actions.erastePost(id));
    },
  })
)(Chisme);