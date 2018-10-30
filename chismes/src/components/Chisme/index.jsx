import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

const Chisme = (
  id, 
  title,
  body,
  to_read,
  to_edit,
  erase,
) => (
  <Fragment>
    <p>{title}</p>


    <button
    >Mas</button>


    <button
    >Editar</button>

    <button
    >Borrar</button>
  </Fragment>
);

export default connect(
  
)(Chisme);