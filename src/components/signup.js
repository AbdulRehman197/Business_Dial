import React, { Component } from 'react';
import { Container, Content, Thumbnail, Form, Item, Label, Input, Icon, Button, Text } from 'native-base';

export default class Signup extends Component {
    render() {
        const path = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
        return (
            <Container>
                <Content>
                    <Thumbnail style={{ width: 120, flex: 1, justifyContent: 'center', alignSelf: 'center' }} large square source={{ uri: path }} />
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
                        <Button style = {{width:'80%' ,flex:1,alignSelf:'center' ,marginTop:30 }} block  iconLeft>
                            <Icon name='person' />
                            <Text>SIGNUP</Text>
                        </Button>
                    </Form>

                </Content>
            </Container>
        )
    }
}