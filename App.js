import React , { Component } from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
const validate = values => {
  const error= {};
  error.username= '';
  error.password= '';
  var ema = values.username;
  var nm = values.password;
  if(values.username === undefined){
    ema = '';
  }
  if(values.password === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.username= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.username= '@ not included';
  }
  if(nm.length > 8){
    error.password= 'max 8 characters';
  }
  return error;
};
class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }
  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady: true});
    }
  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item error= {hasError}>
        <Input {...input}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  render(){
     const { handleSubmit, reset } = this.props;
     if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Form</Title>
          </Body>
        </Header>
        <Content padder>
          <Field name="username" component={this.renderInput} />
          <Field name="password" component={this.renderInput} />
          <Button block primary onPress= {reset}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
export default Login({
  form: 'test',
  validate
})(SimpleForm)