import React, { Component } from 'react'
import { Text, View, Button, TextInput, ActivityIndicator } from 'react-native'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repassword: '',
            fullname: '',
        }
    }

    //   componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.loginStatus !== prevProps.loginStatus) {
    //       console.log(this.props.loginStatus);
    //     }
    //   }

    render() {
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

                <Text> Fullname </Text>
                <TextInput
                    value={this.state.fullname}
                    placeholder="Enter your fullname"
                    keyboardType='default'
                    underlineColorAndroid="#0984e3"
                    returnKeyType="next"
                    onChangeText={(text) => {
                        this.setState({ fullname: text });
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

                <Text> Re-Paswword: </Text>
                <TextInput
                    secureTextEntry={true}
                    value={this.state.repassword}
                    placeholder="Re-type your password"
                    underlineColorAndroid="#0984e3"
                    onChangeText={(text) => {
                        this.setState({ repassword: text });
                    }} />

                <View>
                    <View style={{ height: 12 }}></View>
                    <Button title="REGISTER" onPress={() => {
                        if (this.state.password != this.state.repassword) {
                            alert('No match re-password');
                        }
                        else {
                            this.props.registerAsync(this.state.username, this.state.password, this.state.fullname);
                        }

                    }} />
                </View>
                {
                    (this.props.loading === true) && <ActivityIndicator />
                }
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'red', fontSize: 17 }}>
                    {this.props.registerStatus ? 'Register Success' : ''}
                </Text>

            </View>
        )
    }
}

