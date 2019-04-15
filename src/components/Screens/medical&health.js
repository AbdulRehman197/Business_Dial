import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Thumbnail } from 'native-base';
export default class MedicalHealth extends Component {
  render() {
    const path = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=bloom-blossom-dew-56866.jpg&fm=jpg'
    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("nutritionist")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/nutritionist.png')} style={{ width: 20, height: 20 }} />              
                <Text>Nutritionist</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>

            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("spas")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/spas.png')} style={{ width: 20, height: 20 }} />              
                <Text>Spas</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>
            </CardItem>
        
            <CardItem button onPress={() => this.props.navigation.navigate("desntist")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/desntist.png')} style={{ width: 20, height: 20 }} />              
                <Text>Desntists</Text>
              </Left>
              <Right>
                <Icon name="arrow-right" />
              </Right>
            </CardItem>
         
            <CardItem button onPress={() => this.props.navigation.navigate("doctors")}>
              {/* <Thumbnail square large source={{uri: path}} /> */}
              <Left>
              <Image source={require('../../icons/doctor.png')} style={{ width: 20, height: 20 }} />              
                <Text>Doctors</Text>
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