import React, { Component } from 'react';
import { Container, Content, Thumbnail, Form, Item, Label, Input, Icon, Button, Text,ListItem } from 'native-base';

export default class LogInScreen extends Component { 
    render() {
    console.log(this.props)
        const path = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
        return (
            <Container>
                <Content>
                    <Thumbnail style={{marginTop:'20%', width: 120, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} />
                    <Form>
                        <Item floatingLabel>
                            <Icon active name='person' />
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Icon active name='key' />
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                        <ListItem>
                        <Button onPress = {() => this.props.navigation.navigate("MainPage")} block style = {{width:'38%' ,flex:1,alignSelf:'center' ,marginTop:30 }} dark  iconLeft>
                            <Icon name='unlock' />
                            <Text>Login</Text>
                        </Button>
                        </ListItem>
                        <Button style = {{width:'42%',float:'left',marginTop:30,marginLeft: 10}}   iconLeft>
                            <Icon name="logo-facebook" theme="filled" />
                            <Text>Facebook</Text>
                        </Button>
                        <Button style = {{width:'38%',flex:1 ,alignSelf:'flex-end',marginTop:-44,marginRight: 10}} danger  iconLeft>
                            <Icon name="logo-google" theme="filled"  />
                            <Text>Google</Text>
                        </Button>

                </Content>
            </Container>
        )
    }
}