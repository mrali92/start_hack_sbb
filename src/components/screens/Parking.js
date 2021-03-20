import React, {useState, useEffect} from 'react';
import SearchBar from "../container/SearchBar"
import {StatusBar, TouchableOpacity, Text, StyleSheet, View} from "react-native"
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Modal } from 'react-native';

// var data = require("../../../assets/mobilitat.json")

function Parking({props, navigation}) {

    const [showBookingModal, setShowBookingModal] = useState(false);

    const mapStyle = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
    ]

    const getMobilityData = () => {
        console.log("reached");
        // console.log(JSON.stringify(data[0].datasetid));
    }  

    return(
        <View>        
        <StatusBar barStyle={'dark-content'} filter={getMobilityData}/>
        <MapView
            style={{width: "100%", height: "100%"}}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude: 46.937487476,
                longitude: 7.3952379525,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            customMapStyle={mapStyle}

        > 
        <Marker 
            coordinate={{
                latitude: 46.937487476,
                longitude: 7.3952379525,
            }}
            onPress={() => setShowBookingModal(!showBookingModal)}
            image={require("../../../assets/marker.png")}
            title="Bern Bümpliz Süd"
        />
        </MapView>
       { showBookingModal && <View style={styles.modal}>
        <Text style={styles.headline}>Test</Text>
            <View style={styles.content}>
                <View style={styles.col}>
                    <Text>Supper</Text>
                </View>
                <View style={styles.col}>
                    <Text>Supper</Text>
                </View>
            </View>
       </View>}
       <SearchBar/>
        </View>

    )
}

export default Parking;

const styles = StyleSheet.create({
    headline: {
        fontSize: 18,
        fontWeight: "600",
        paddingTop: 25,
        padding: 15,
    },
    container: {
        // height: 390,
        position: "absolute",
        bottom: 100,
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        width: "90%",
        alignSelf: "center", 
    },
    tile: {
        flex: 1,
        margin: 10,
        width: 60, 
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        height: 200,
        width: "90%",
        position: "absolute",
        bottom: 10,
        alignSelf:"center", 
        borderRadius: 15, 
        backgroundColor: "#FFFFFF"
    },
    content: {
        flexDirection: "row",
    },
    headline: {
        padding: 10,
        fontSize: 24,
        fontWeight: "600",
        alignSelf: "center",
    },
    col: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})