import React, {Component} from 'react'
import { FlatList,View, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {  Text } from 'native-base';
import {getData}  from '../Actions';

class SuperheroesList extends Component {
    state = {
        data: []
      };
      componentWillMount() {
          this.props.getData();
        this.fetchData();
      }
      fetchData = async () => {
        this.setState({ data:this.props.superheroes.heroes});
};


    render(){
        console.log(this.props.superheroes);
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                    <TouchableHighlight 
                        style={{marginVertical:25}} 
                        onPress={() => {
                        // alert(item.characters);
                        this.props.navigation.navigate('Details',item);
                        }}> 
                    <Text>{item.superhero}</Text>
                    </TouchableHighlight> 
                    }/>
                
            </View>
        )
    }
}

//function que le pasaremos el state y que devuelve siempre un objeto
const mapStateToProps = state => {
    //accedemos a superheroes que es el nombre que le hemos puesto en el reducer
    console.log(state);
    return {superheroes: state.superheroes}
}
const mapDispatchToProps = dispatch => {
    return{
        getData: () => dispatch(getData())
    }
}
//a connect le pasaremos la función mapStateToProps y luego ejecutará 
//el componente SuperheroList
export default connect(mapStateToProps,mapDispatchToProps)(SuperheroesList)