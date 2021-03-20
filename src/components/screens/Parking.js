import React, {useState, useEffect} from 'react';
import SearchBar from "../container/SearchBar"
import {StatusBar, Dimensions, Image, Text, StyleSheet, View} from "react-native"
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LineChart} from "react-native-chart-kit";

// var data = require("../../../assets/mobilitat.json")

function Parking({props, navigation}) {

    const [showBookingModal, setShowBookingModal] = useState(false);
    const [showChartModal, setShowChartModal] = useState(false);

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
            // image={require("../../../assets/marker.png")}
            title="Bern Bümpliz Süd"
        />
        </MapView>
       { showBookingModal && <View style={styles.modal}>
        <Text style={styles.headline}>Bern Bümpliz Süd</Text>
            <View style={styles.topText}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={require("../../../assets/coin.png")} style={{width: 27, height: 27, tintColor: "red", marginHorizontal: 10}}></Image>
                <Text style={styles.text}>CHF 1.00/h</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={require("../../../assets/route.png")} style={{width: 26, height: 28, tintColor: "red", marginHorizontal: 10}}></Image>
                <Text style={styles.text}>1.2km away</Text>
                </View>
            </View>
            <View style={[{paddingVertical: 15, flexDirection: "row"}]}>
            <View style={{flexDirection: "row", alignItems: "center",}}>
                <Image source={require("../../../assets/coin.png")} style={{width: 27, height: 27, tintColor: "red",marginLeft: 47, marginRight: 10}}></Image>
                <Text style={styles.text}>CHF 5.00/24h</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginLeft: 60,}}>
                <TouchableOpacity onPress={() => setShowChartModal(!showChartModal)}>
                    <AnimatedCircularProgress
                        size={50}
                        width={9}
                        fill={66}
                        tintColor="#D12111"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#3d5875" />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{alignSelf: "center", justifyContent: "center", width: 120, marginTop: 10, height: 40, backgroundColor: "#D12111", borderRadius: 10}}>
                <Text style={[styles.text, {alignSelf: "center", color: "#FFFFFF"}]}>Book now</Text>
            </View>
       </View>}
       { showChartModal && <View style={styles.modal2}>
       <LineChart
    data={{
      labels: ["6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"],
      datasets: [
        {
          data: [
            20,
            40,
            60,
            80,
            100,
            80,
            70,
            60,
            40,
          ]
        }
      ]
    }}
    width={375} // from react-native
    height={220}
    // yAxisLabel="$"
    yAxisSuffix="%"
    yAxisInterval={1} // optional, defaults to 1
    withHorizontalLines={false}
    withVerticalLines={false}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#FFFFFF",
      backgroundGradientTo: "#FFFFFF",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "3",
        strokeWidth: "2",
        // stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
       </View>}
       <SearchBar/>
        </View>

    )
}

export default Parking;

const styles = StyleSheet.create({
    headline: {
        padding: 15,
        fontSize: 22,
        fontWeight: "600",
        alignSelf: "center",
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
        height: 240,
        width: "90%",
        position: "absolute",
        bottom: 10,
        alignSelf:"center", 
        borderRadius: 15, 
        backgroundColor: "#FFFFFF"
    },
    modal2: {
        height: 240,
        width: "90%",
        position: "absolute",
        bottom: 260,
        alignSelf:"center", 
        borderRadius: 15, 
        backgroundColor: "#FFFFFF"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    topText: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
    },
    col: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    }
})