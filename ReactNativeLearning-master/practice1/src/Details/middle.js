import React, { Component } from 'react';
import {View} from 'react-native'
import IndexDetails from './index'

const handleSubmit = values => {    
    alert(`submitting form with values123 = ${values}`);
   // 
};

export default class Middle extends Component{
  render() {
    alert(this.props.navigation.state.params.superhero);
    return (
        <IndexDetails handleSubmit={handleSubmit}/>
    );
  }
}