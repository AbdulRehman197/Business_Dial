import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Left, Icon, Right, Thumbnail } from 'native-base';
export default class RestaurantsFood extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("seafood")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/seafood.png')} style={{ width: 20, height: 20 }} />              

                <Text>SeaFood</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("turkish")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/turkish.png')} style={{ width: 20, height: 20 }} />              

                <Text>Turkish</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("american")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/amercan.png')} style={{ width: 20, height: 20 }} />              

                <Text>American</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("cafes")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/cofe.png')} style={{ width: 20, height: 20 }} />              

                <Text>Cafes</Text>
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