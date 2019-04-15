import React, { Component } from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Thumbnail, Content, Button ,Text} from 'native-base';
export default class WelComeScreen extends Component {
  render() {
    const uri = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
    return (
      <Container style={styles.container}>
        <Content>
          {/* <Thumbnail large square source={{ uri: uri }} /> */}
          <Button onPress = {()=> this.props.navigation.navigate("LogInScreen")} >
          <Text>Login</Text></Button>
          <Button onPress = {()=> this.props.navigation.navigate("SignUpScreen")}>
          <Text>SignUp</Text></Button>
          <Button onPress = {()=> this.props.navigation.navigate("Home")}>
          <Text>DashBoard</Text></Button>
        </Content>
      </Container>
    );
  }
}                    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});