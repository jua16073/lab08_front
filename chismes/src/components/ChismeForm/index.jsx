import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class chisme_Form extends React.Component{
  render(){
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <h3>Nuevo Chisme</h3>


        <p>Titulo</p>
        <title>Titulo</title>
        <input type="text"
        ref = {node => {this.title = node;}}/> <br/>


        <p>Contenido</p>
        <title>Contenido</title>
        <input type="text"
        ref = {node => {this.contenido = node;}}/> <br/>

        <button
        onClick = {
          () =>{
            onSubmit(
              this.title,
              this.contenido,
            );
            this.title = "";
            this.contenido = "";
          }
        }
        >Nuevo Chisme</button>
      </Fragment>
    )
  }
}

export default connect (
  undefined, 
  dispatch => ({
    onSubmit(titulo, contenido){
      dispatch(actions.addPost(titulo, contenido));
    }
  })
)(chisme_Form);