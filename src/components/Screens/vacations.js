import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Left, Icon, Right, Thumbnail } from 'native-base';
export default class Vacations extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("beaches")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/beaches.png')} style={{ width: 20, height: 20 }} />              

                <Text>Beaches</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

            </CardItem>
         
            <CardItem button onPress={() => this.props.navigation.navigate("events")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/event.png')} style={{ width: 20, height: 20 }} />              

                <Text>Events</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
         
            <CardItem button onPress={() => this.props.navigation.navigate("parties")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/parties.png')} style={{ width: 20, height: 20 }} />              

                <Text>Parties</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
         
            <CardItem button onPress={() => this.props.navigation.navigate("resorts")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/resort.png')} style={{ width: 20, height: 20 }} />              

                <Text>Resorts</Text>
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