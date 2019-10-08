import React, { Component } from 'react'
import { Text, View, Button, TextInput, ActivityIndicator } from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'admin',
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.loginStatus !== prevProps.loginStatus) {
      console.log(this.props.loginStatus);
    }
  }

  render() {
    //alert(this.props.loginStatus);
    return (
      <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
        {/* CONDITIONAL REDERING */}

        <Text> Email </Text>
        <TextInput
          value={this.state.username}
          placeholder="Enter your username"
          keyboardType='default'
          underlineColorAndroid="#0984e3"
          returnKeyType="next"
          onChangeText={(text) => {
            this.setState({ username: text });
          }} />

        <Text> Paswword: </Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          placeholder="Enter your password"
          underlineColorAndroid="#0984e3"
          onChangeText={(text) => {
            this.setState({ password: text });
          }} />

        <View>
          <View style={{ height: 12 }}></View>
          <Button title="LOGIN" onPress={() => {
            this.props.loginAsync(this.state.username, this.state.password);
            //alert(`state: ${JSON.stringify(this.props.user)}`);
          }} />
        </View>
        {
          (this.props.loading === true) && <ActivityIndicator />
        }

        <Text style={{ margin: 10, fontWeight: 'bold', color: 'red', fontSize: 17 }}>
          {this.props.loginStatus ? 'Login Success' : ''}
      </Text>
      <Text style={{ margin: 10, fontWeight: 'bold', color: 'blue', fontSize: 17 }}>
          {this.props.loginStatus ? `Info: ${JSON.stringify(this.props.user)}` : ''}
      </Text>
     
        {/* <Text style={{ margin: 10, fontWeight: 'bold', color: 'red', fontSize: 17 }}>
          Status: {this.props.loginStatus?'true':'false'}
        </Text>
        <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17 }}>
          User: {this.props.username}
        </Text>
        <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17 }}>
          Pass: {this.props.password}
        </Text> */}
      </View>
    )
  }
}

