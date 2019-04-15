import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Icon, Right, Thumbnail } from 'native-base';
export default class Electronics extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("TownPlanner")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Text>Festivals</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>

            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("TownPlanner")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Text>Museums</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
         
            <CardItem button onPress={() => this.props.navigation.navigate("TownPlanner")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
                <Text>Casinos</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("TownPlanner")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>

                <Text>Cinemas</Text>
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