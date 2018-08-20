import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
import Dimensions from 'Dimensions';

export default class Login extends Component {
    
    constructor() {
        super();
        this.state = {
           userName:'',
           password:''
        }
      
    }
    getUser = (text) => {
        this.setState({ userName: text});
    }
    getPass = (text) => {
        this.setState({password: text});
    }
    
    checkLogin = () => {
       
        if (this.state.userName == "jose" && this.state.password== "123") {
           
            this.props.navigation.navigate('List');
        } else {
            alert("Incorrect credentials!");
        }
        
    }

    render() {
       
        return (
            
            <View style={styles.main}>
                <Text 
                    style={{fontSize: 50}}>
                    Login
                </Text>
                <TextInput  placeholder='Username'
                onChangeText={this.getUser} />
                <TextInput secureTextEntry={true} id="pass" placeholder='Password'
                onChangeText={this.getPass} />
                <Button
                title="Search"
                      onPress={this.checkLogin}
                    />
                </View>
            );
    }
}

const {width, height} = Dimensions.get('window');
styles = StyleSheet.create({
    main:{
    flex:1,
    justifyContent:'center',
    width,
    height,
    padding: 20,
    backgroundColor: '#d9f5f5'}
  })