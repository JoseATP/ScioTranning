import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';

const renderInput = ({ input: { onChange, ...restInput }}) => {
return (<TextInput style={styles.input} onChangeText={onChange} {...restInput} /> )
}

const DetailsForm = props => {
    const { handleSubmit } = props

    return (
        <Container>
            <Content>

            <TouchableOpacity onPress={handleSubmit}>
            <Text>Submit</Text>
            </TouchableOpacity>

            </Content>
        </Container>

    );
}

DetailsForm = reduxForm({
    form: 'details', // a unique identifier for this form
})(DetailsForm);

export default DetailsForm;