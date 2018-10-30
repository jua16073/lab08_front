import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Chisme from '../Chisme';

import * as selectors from '../../reducers';

const List = ({chismes = []}) => (
  <Fragment>
    <div>
      {
        chismes.length > 0 
      ? chismes.map(({id}) => <Chisme key = {id} id = {id} />)
      : <li> No hay chismes</li>
      }
    </div>
  </Fragment>
);


export default connect(
  state => ({
    posts: selectors.getPosts(state),
  }),
  undefined
)(Chisme);

//
