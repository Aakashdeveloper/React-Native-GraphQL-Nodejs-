import React, { Component } from 'react';
import { Text, FlatList, View, Image, Button, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import { getHotels } from './api';
import  styles from './assets/css/hotelStyles';


class HotelList extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={styles.headingText}>HOTEL BOOKING APP
            </Text>
        ),
        headerTitleStyle: { alignSelf: 'center' },
      });
    state = {
        hotels : []
    }

    componentDidMount() {
        getHotels().then(hotels => this.setState({hotels}));
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('ReservationForm')
    }

    render(){
        return (
            <View style = {styles.card}>
                <View style={styles.touchButton}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('ReservationForm')}>
                    <Text style={styles.buttonText}>Book Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reservationbutton}
                    onPress={() => this.props.navigation.navigate('Bookings')}>
                    <Text style={styles.buttonText}>Check Reservation</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                data={this.state.hotels}
                renderItem = {({item}) =><View style={styles.inner}
                >
                                                <Image
                                                    style={styles.hotelimage}
                                                    source={{uri: item.cover}} 
                                                />
                                                 <Text style={styles.text}>{item.name} - {item.city} </Text> 
                                                 <Text style={styles.available}>Available Rooms: {item.available} </Text>
                                        </View>
                }
                keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );
    }
}

export default HotelList;