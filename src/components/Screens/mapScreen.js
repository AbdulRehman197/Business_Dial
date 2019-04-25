import React, { Component } from 'react';
import { Platform, Dimensions, Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Modal from "react-native-modal";

// import component
import MapInfo from './mapGetInfo'
export default class MapScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        isModalVisible: false,
        focusedLocation: {
            latitude: 31.418715,
            longitude: 73.079109,
            latitudeDelta: 0.0022,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0022
        },
        locationChosen: false,
        markers: []
    }
    componentWillMount = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({
                focusedLocation: {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    latitudeDelta: 0.1022,
                    longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.1022
                }
            });
        },
            err => {
                // alert(err,'error');
                console.log('err', err)
            })
    }
    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0022
        });
        this.setState(prevState => {
            let previousState = prevState
            prevState.markers.push({
                coordinate: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.0022,
                    longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0022
                }
            });
            return {
                focusedLocation: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.0022,
                    longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0022
                },
                locationChosen: true,
                markers: previousState.markers
            }
        });
    }
    locateMeHandler = event => {
        navigator.geolocation.getCurrentPosition(pos => {
            let coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            }
            this.pickLocationHandler(coordsEvent);
        },
            err => {
                alert('Getting Location failed. Please select manually.');
            })
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    render() {
        const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJbaSkm3z4of2nLFzdZbNR0kLSQFujXMl6knQ_cd1wsVGsl2j'

        return (
            <View>
                <View style={{ flex: 1 }}>
                    <Modal isVisible={this.state.isModalVisible}
                        backdropColor='black'
                        backdropOpacity={0.7}
                        style={{  justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{
                            backgroundColor: 'white',
                            width: 300,
                            height: 300,
                            // top:25,
                            // alignSelf: 'center',
                            borderRadius: 15,
                            // alignItems: 'center',
                            // justifyContent:'center'
                        }}>
                        <MapInfo closeModal = {this._toggleModal} />
                        </View>
                    </Modal>
                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Location
                    </Text>
                </View>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    style={{ height: 250, marginTop: 50 }}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                >

                    {this.state.locationChosen ? this.state.markers.map((item) => {
                        return <Marker
                            onPress={this._toggleModal}
                            coordinate={item.coordinate}
                            description='this is marker description'
                            // key = {item.coordinate}
                            // icon={{ uri: uri }}
                            title='Business_dail'
                            identifier='identifier'
                        // style = {{width:30 ,height:50}}
                        >

                        </Marker>



                    }) : null
                    }
                </MapView>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="Locate me"
                        onPress={this.locateMeHandler}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});