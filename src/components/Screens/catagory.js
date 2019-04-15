import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Icon, Right, Thumbnail } from 'native-base';
export default class CatagoryComponent extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("Construction")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Icon active name="construct" />
                <Text>Construction</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("MedicalHealth")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Icon active name="medkit" />
                <Text>Medical&Health</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("EducationInstitutes")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Icon active name="clipboard" />
                <Text>EduInstitutes</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("Shop")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>

                <Icon active name="cart" />
                <Text>Shopping</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("EventPlaning")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Icon active name="logo-game-controller-b" />
                <Text>Event Planing</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("Electronics")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Icon active name="pulse" />
                <Text>Electronics</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("RestaurantsFood")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Icon active name="restaurant" />
                <Text>Restaurants&Food</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("Vacations")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Icon active name="pause" />
              <Text>Vacation/Holidays</Text>
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