import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { Container, Thumbnail, Content, Button, Text, Card, CardItem, Left, Right, Icon, Body } from 'native-base';
export default class PropertyDealerAd extends Component {
  render() {
    const faisalabad = 'https://nation.com.pk/print_images/large/2017-11-03/faisalabad-architectural-heritage-in-a-shambles-1509729509-6563.jpg'
    return (
      <Container >
        <Content>
          {/* <Thumbnail large square source={{ uri: uri }} /> */}
          <Card style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
            <CardItem cardBody>
              <Image source={{ uri: faisalabad }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Bashir Trade</Text>
              </Left>
                <Icon name="link"  button onPress = {()=>alert('working')}/>
                <Icon name="heart" style = {{color:'red'}} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });