import React, { Component } from 'react';
import { Text, FlatList, View, Image, Button, TouchableOpacity} from 'react-native';
import { getReservation,formatDateTime } from './api';
import styles from './assets/css/reservationStyles';

class ReservationList extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={styles.headingText}>Your Reservation
            </Text>
        ),
        headerTitleStyle: { alignSelf: 'center' },
    });
    state = {
        reservations : []
    }

    componentDidMount() {
        getReservation().then(reservations => this.setState({reservations}));
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
                    <TouchableOpacity style={styles.availablebutton}
                    onPress={() => this.props.navigation.navigate('List')}>
                    <Text style={styles.buttonText}>Available Hotels</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                data={this.state.reservations}
                renderItem = {({item}) =><View style={styles.inner}
                >
                                                
                                                <Image
                                                    style={{width: 200, height: 100}}
                                                    source={{uri: item.cover}} 
                                                />
                                                 <Text style={styles.text}>Your Booking For {item.hotel} - {item.city} </Text> 
                                                 <Text style={styles.text}>is confirmed for date</Text>
                                                 <Text style={styles.date}> {formatDateTime(item.startDate)}</Text>
                                        </View>
                }
                keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );
    }
}

export default ReservationList;


