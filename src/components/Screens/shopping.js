import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Left, Icon, Right, Thumbnail } from 'native-base';
export default class Shopping extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("center")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/center.png')} style={{ width: 20, height: 20 }} />              
                <Text>Center</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("clothing")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/cloth.png')} style={{ width: 20, height: 20 }} />              

                <Text>Clothing</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          
            <CardItem button onPress={() => this.props.navigation.navigate("computers")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/computer.png')} style={{ width: 20, height: 20 }} />              

                <Text>Computers</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          
            <CardItem button onPress={() => this.props.navigation.navigate("fashion")}> 
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/fashion.png')} style={{ width: 20, height: 20 }} />              

                <Text>Fashion</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}   