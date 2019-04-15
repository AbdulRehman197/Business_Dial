import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Thumbnail } from 'native-base';
export default class Construction extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("TownPlanner")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Image source={require('../../icons/townPlanner.png')} style={{ width: 20, height: 20 }} />
                <Text>Town Planner</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>

            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("developers")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Image source={require('../../icons/developers.png')} style={{ width: 20, height: 20 }} />

                <Text>Developers</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("propertyDealers")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Image source={require('../../icons/propertyDealers.png')} style={{ width: 20, height: 20 }} />
                <Text>Property Dealers</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("architucture")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Image source={require('../../icons/architucture.png')} style={{ width: 20, height: 20 }} />
                <Text>Architucture</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}   