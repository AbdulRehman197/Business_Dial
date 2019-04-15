import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class PapularLocations extends Component {
    render() {
        const faisalabad = 'https://nation.com.pk/print_images/large/2017-11-03/faisalabad-architectural-heritage-in-a-shambles-1509729509-6563.jpg'
        const lahore = 'https://photo-cdn.urdupoint.com/media/2018/12/_3/730x425/pic_1545463630.jpg'
        const islamabad = 'https://www.telegraph.co.uk/content/dam/Travel/2017/September/islamabad%20GettyImages-611734156.jpg?imwidth=450'
        const rawalpindi = 'http://visitpak.com/wp-content/uploads/2012/10/mosque-of-golra-sharif.jpg'
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
                        <CardItem cardBody>
                            <Image source={{ uri: faisalabad }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Faisalabad</Text>
                            </Left>

                            <Icon name="link" button onPress={() => alert('working')} />
                            <Right>

                                <Text>Locations 11</Text>

                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
                        <CardItem cardBody>
                            <Image source={{ uri: islamabad }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Islamabad</Text>
                            </Left>
                            <Icon name="link" button onPress={() => alert('working')} />

                            <Right>
                                <Text>Locations 11</Text>

                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
                        <CardItem cardBody>
                            <Image source={{ uri: lahore }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Lahore</Text>
                            </Left>
                            <Icon name="link" button onPress={() => alert('working')} />

                            <Right>
                                <Text>Locations 5</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
                        <CardItem cardBody>
                            <Image source={{ uri: rawalpindi }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>Rawalpindi</Text>
                            </Left>
                            <Icon name="link" button onPress={() => alert('working')} />

                            <Right>
                                <Text>Locations 3</Text>

                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}