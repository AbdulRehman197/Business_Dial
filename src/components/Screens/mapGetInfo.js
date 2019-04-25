import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Text, Input, Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';
// import { Button } from 'react-native-paper';
export default class MapInfo extends Component {
    state = {
        avatarSource:{}
    }

    render() {
        
        return (
            <Container style={{ width: '80%', margin: 20 ,marginTop:50 }}>
                <Content>
                    <Form  >
                        <Item>
                            <Input placeholder="title" />
                        </Item>
                        <Item >
                            <Input placeholder="Description" />
                        </Item>         
                    </Form>
                    <Button block small rounded onPress={this.props.closeModal} style = {{marginTop:20}}>
                        <Text>Save Data</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

// ImagePicker.showImagePicker(options, (response) => {
//     console.log('Response = ', response);
   
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//     } else {
//       const source = { uri: response.uri };
   
//       // You can also display the image using data:
//       // const source = { uri: 'data:image/jpeg;base64,' + response.data };
   
//       this.setState({
//         avatarSource: source,
//       });
//     }
//   });