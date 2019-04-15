import React, { Component } from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Thumbnail, Content} from 'native-base';
import { Dimensions, Text, TouchableHighlight } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
export default class MapScreen extends Component {
  state = {
    focusedLocation:{
        latitude: 31.418715,
        longitude: 73.079109,
        latitudeDelta: 0.0022,
        longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0022
    },
    locationChosen: false,
    markers:[]
}
componentWillMount = () => {
    navigator.geolocation.getCurrentPosition(pos => {
        this.setState({
            focusedLocation:{
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                latitudeDelta: 0.1022,
                longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.1022
            }
        });
    },
    err => {
        alert('error');
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
    this.setState(prevState =>{
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
            nativeEvent:{
                coordinate:{
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
  render() {
    const uri = 'https://businessdial.pk/wp-content/uploads/2019/03/Add-Business-Get-Business-2.jpg'
    return (
      <View>
                <View style={{alignItems:'center',marginTop:10}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>
                        Location
                    </Text>
                </View>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    style={{height:370,marginTop:50}}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                >
                    {this.state.locationChosen?this.state.markers.map((item)=>{
                        return <Marker onCalloutPress={alert('clicked on marker.')} coordinate={item.coordinate} />
                    }):null
                    }
                </MapView>
                {/* <View style={{marginTop:10}}>
                    <Button
                    title="Locate me"
                    onPress={this.locateMeHandler}
                    />
                </View> */}
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