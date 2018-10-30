import React, {Fragment} from 'react';
import ChismeForm from '../ChismeForm';
import ChismeList from '../ChismesList';

const ChismeApp = () => (
  <Fragment>
    <ChismeList/>
    <ChismeForm/>
  </Fragment>
);

export default ChismeApp;