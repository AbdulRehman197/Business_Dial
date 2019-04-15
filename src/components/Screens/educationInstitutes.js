import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Icon, Right, Thumbnail } from 'native-base';
export default class EducationInstitutes extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("apartments")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/aprtments.png')} style={{ width: 20, height: 20 }} />              

                <Text>Apartments</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("brokers")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/brokers.png')} style={{ width: 20, height: 20 }} />              

                <Text>Brokers</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("healthcars")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/healthcars.png')} style={{ width: 20, height: 20 }} />              

                <Text>HealthCare</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem button onPress={() => this.props.navigation.navigate("house")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/house.png')} style={{ width: 20, height: 20 }} />              

                <Text>House</Text>
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